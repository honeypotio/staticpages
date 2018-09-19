import i18n from 'i18next';
import { getCurrentLangKey } from 'ptz-i18n';
import general from '../locales/general.json';
import footer from '../locales/footer.json';
import header from '../locales/header.json';

const path = window.location.pathname;
const languages = ['de', 'en', 'nl'];
const defaultLang = 'en';

i18n.init({
  lng: defaultLang,
  fallbackLng: defaultLang,
  resources: {
    de: {
      footer: footer.de,
      header: header.de,
      general
    },
    en: {
      footer: footer.en,
      header: header.en,
      general
    },
    nl: {
      footer: footer.nl,
      header: header.nl,
      general
    }
  }
});

export default i18n;

export function getLang() {
  return getCurrentLangKey(languages, defaultLang, path);
}
