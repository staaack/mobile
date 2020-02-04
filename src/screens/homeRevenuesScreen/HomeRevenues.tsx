import Config from 'react-native-config';
import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StatusBar } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

import { TGlobalContext, GlobalContext } from '../../context/globalContext';
import { GET_DATA } from '../../hooksGlobalState/constants/types';

import CompanyDetails from './components/CompanyDetails';
import { Revenues } from './components/revenues';
import { RevenuesTabView } from './components/revenuesTabView';
import { ScrollViewWrapper } from '../../components/scrollViewWrapper';
import database from '../../database/db';
import styles from './styles';

const company = database[0];

interface IProps {}

interface IState {
  data: JSON | null;
  isSubmitting: boolean;
}

export const HomeRevenues: NavigationStackScreenComponent<IProps> = (): JSX.Element => {
  const [{ data, isSubmitting }, setData] = useState<IState>({
    data: null,
    isSubmitting: false,
  });
  const { state, dispatch } = useContext<TGlobalContext>(GlobalContext);

  useEffect(() => {
    const fetchingFromRest: () => Promise<any> = () =>
      fetch(Config.REST_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then(resJson => {
          console.log('The Data retrieved from Mock: ', resJson);
          dispatch({
            type: GET_DATA,
            payload: resJson,
          });
        })
        .catch(error => {
          setData((state: IState) => ({
            ...state,
            isSubmitting: false,
          }));
        });

    fetchingFromRest();
  }, [data]);

  console.log('Global State: ', state);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFF"
        translucent={true}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <CompanyDetails
            companyName={company.name}
            imageURI={company.profilePic}
          />
          <ScrollViewWrapper>
            <Revenues />
            <RevenuesTabView />
          </ScrollViewWrapper>
        </View>
      </SafeAreaView>
    </>
  );
};
