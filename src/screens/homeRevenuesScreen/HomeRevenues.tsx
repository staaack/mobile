import Config from 'react-native-config';
import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StatusBar, Platform } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import axios from 'axios';

import { TGlobalContext, GlobalContext } from '../../context/globalContext';
import { GET_DATA } from '../../hooksGlobalState/constants/types';

import { Spinner } from '../../components/spinner';
import { Revenues } from './components/revenues';
import { RevenuesTabView } from './components/revenuesTabView';
import CompanyDetails from './components/CompanyDetails';
import { ScrollViewWrapper } from '../../components/scrollViewWrapper';
import database from '../../database/db';
import styles from './styles';

const company = database[0];

interface IProps {}

interface IState {
  data: JSON | null;
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

    const { state, dispatch } = useContext<TGlobalContext>(GlobalContext);

    useEffect(() => {
      const fetchingData: () => Promise<void> = () =>
        axios
          .get(Config.REST_URL)
          .then(resJson => {
            console.log('Response JSON: ', resJson);
            dispatch({
              type: GET_DATA,
              payload: resJson,
            });
          })
          .catch(error => {
            setData((state: IState) => ({
              ...state,
              isSubmitting: false,
              errorMessage: error,
            }));
          });

      fetchingData();
    }, [data]);

    data && console.log('The data retrieved: ', state);

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {!isSubmitting ? (
            <>
              <CompanyDetails
                companyName={company.name}
                imageURI={company.profilePic}
              />
              <ScrollViewWrapper>
                <Revenues />
                <RevenuesTabView />
              </ScrollViewWrapper>
            </>
          ) : (
            <Spinner size={Platform.OS === 'ios' ? 'large' : 40} />
          )}
        </View>
      </SafeAreaView>
    );
  },
);
