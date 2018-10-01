import i18n from 'i18next';
import { getCurrentLangKey } from 'ptz-i18n';
import general from '../locales/general.json';
import footer from '../locales/footer.json';
import header from '../locales/header.json';
import seo from '../locales/seo.json';
import index from '../locales/index.json';
import faq from '../locales/faq.json';

export const languages = ['en', 'de', 'nl'];
const path = (typeof window !== 'undefined' ? window.location.pathname.replace(process.env.URL_BASE, '') : '');
console.log(path, path.split('/')[1])
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
      seo: seo.de,
      index: index.de,
      faq: faq.de
    },
    en: {
      footer: footer.en,
      header: header.en,
      general,
      seo: seo.en,
      index: index.en,
      faq: faq.en
    },
    nl: {
      footer: footer.nl,
      header: header.nl,
      general,
      seo: seo.nl,
      index: index.nl,
      faq: faq.nl
    }
  }
});

export default i18n;

export function getLang() {
  return getCurrentLangKey(languages, defaultLang, path);
}

export function getPathLang() {
  return getCurrentLangKey(languages, '', path);
}
