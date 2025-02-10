import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './translation';
import { ELangVariables } from '../StoreContext';

i18next.use(initReactI18next).init({
  lng: ELangVariables.EN,
  debug: true,
  resources,
});

export default i18next;
