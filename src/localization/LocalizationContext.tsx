import React, { createContext, useState, Context } from 'react';
import * as RNLocalize from 'react-native-localize';
import AsyncStorage from '@react-native-community/async-storage';

import translations from './translation';
import { CONSTANTS as CST } from '../constants';

export interface TContextValue {
  translations: { [key: string]: string };
  setAppLanguage: (language: string) => void;
  appLanguage: string;
  initializeAppLanguage: () => void;
}

export const LocalizationContext: Context<TContextValue> = createContext<
  TContextValue
>({
  translations,
  setAppLanguage: () => {},
  appLanguage: CST.DEFAULT_LANGUAGE,
  initializeAppLanguage: () => {},  
});

export const LocalizationProvider: React.SFC<{}> = ({ children }) => {
  const [appLanguage, setAppLanguage] = useState(CST.DEFAULT_LANGUAGE);

  const setLanguage: (language: string) => void = language => {
    translations.setLanguage(language);
    setAppLanguage(language);
    AsyncStorage.setItem(CST.APP_LANGUAGE, language);
  };

  const initializeAppLanguage = () =>
    AsyncStorage.getItem(CST.APP_LANGUAGE).then(currentLanguage => {
      if (!currentLanguage) {
        let localeCode = CST.DEFAULT_LANGUAGE;
        const supportedLocaleCodes: Array<string> = translations.getAvailableLanguages();
        const phoneLocaleCodes = RNLocalize.getLocales().map(
          locale => locale.languageCode,
        );
        phoneLocaleCodes.some(code => {
          // @ts-ignore: Unreachable code error
          if (supportedLocaleCodes.includes(code)) {
            localeCode = code;
            return true;
          }
        });
        setLanguage(localeCode);
      } else {
        setLanguage(currentLanguage);
      }
    });

  return (
    <LocalizationContext.Provider
      value={{
        translations,
        setAppLanguage: setLanguage,
        appLanguage,
        initializeAppLanguage,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};
