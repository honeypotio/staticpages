import i18n from 'i18next';
import { getCurrentLangKey } from 'ptz-i18n';
import index from '../pages/index.json'

const path = window.location.pathname;

i18n.init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    de: {
      index: index.de
    },
    en: {
      index: index.en
    }
  }
});

export default i18n;

export function getLang() {
  return getCurrentLangKey(['de', 'en'], 'en', path);
}
