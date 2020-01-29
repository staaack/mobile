import LocalizedStrings from 'react-native-localization';
import { EN, FR, NL } from './translations';

const translations = {
  en: EN,
  nl: NL,
  fr: FR,
};

export default new LocalizedStrings(translations);
