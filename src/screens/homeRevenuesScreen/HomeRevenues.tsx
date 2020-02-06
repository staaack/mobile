import Config from 'react-native-config';
import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Platform } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import axios from 'axios';

import { TGlobalContext, GlobalContext } from '../../context/globalContext';
import { GET_DATA } from '../../hooksGlobalState/constants/types';

import { ScrollViewWrapper } from '../../components/scrollViewWrapper';
import CompanyDetails from './components/CompanyDetails';
import { Spinner } from '../../components/spinner';
import { Revenues } from './components/revenues';
import { RevenuesTabView } from './components/revenuesTabView';
import styles from './styles';
import images from '../../assets/images';

interface IProps {}
interface IState {
  data: any;
  isSubmitting: boolean;
  errorMessage?: string | null;
}

export const HomeRevenues: NavigationStackScreenComponent<IProps> = React.memo(
  (): JSX.Element => {
    const [{ data, isSubmitting, errorMessage }, setData] = useState<IState>({
      data: null,
      isSubmitting: false,
      errorMessage: null,
    });

    const { dispatch } = useContext<TGlobalContext>(GlobalContext);

    useEffect(() => {
      const fetchingData: () => Promise<void> = () =>
        axios
          .get(Config.REST_URL)
          .then(({ data }) => {
            dispatch({
              type: GET_DATA,
              payload: data,
            });
            setData(state => ({
              ...state,
              data,
            }));
          })
          .catch(error => {
            setData((state: IState) => ({
              ...state,
              isSubmitting: false,
              errorMessage: error,
            }));
          });

      fetchingData();
    }, []);

    return (
      <SafeAreaView style={styles.safeArea}>
        {!isSubmitting && data && Object.keys(data).length > 0 ? (
          <View style={styles.container}>
            <CompanyDetails
              companyName={data['Project information'][0]}
              imageURI={images.COMPANY_IMG_URI}
            />
            <ScrollViewWrapper>
              <Revenues revenues={data['Sales']['Financial Metrics']} />
              <RevenuesTabView />
            </ScrollViewWrapper>
          </View>
        ) : (
          <Spinner size={Platform.OS === 'ios' ? 'large' : 40} />
        )}
      </SafeAreaView>
    );
  },
);
