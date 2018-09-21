import i18n from 'i18next';
import { getCurrentLangKey } from 'ptz-i18n';
import general from '../locales/general.json';
import footer from '../locales/footer.json';
import header from '../locales/header.json';
import seo from '../locales/seo.json';

export const languages = ['de', 'en', 'nl'];
const path = (typeof window !== 'undefined' ? window.location.pathname : '');
const defaultLang = 'en';

i18n.init({
  lng: defaultLang,
  fallbackLng: defaultLang,
  defaultNS: 'general',
  fallbackNS: 'general',
  resources: {
    de: {
      footer: footer.de,
      header: header.de,
      general,
      seo: seo.de
    },
    en: {
      footer: footer.en,
      header: header.en,
      general,
      seo: seo.en
    },
    nl: {
      footer: footer.nl,
      header: header.nl,
      general,
      seo: seo.nl
    }
  }
});

export default i18n;

export function getLang() {
  return getCurrentLangKey(languages, defaultLang, path);
}
