import i18n from 'i18next';
import { getCurrentLangKey } from 'ptz-i18n';
import general from '../locales/general.json';
import footer from '../locales/footer.json';
import header from '../locales/header.json';
import seo from '../locales/seo.json';
import index from '../locales/index.json';
import techHiring from '../locales/tech-hiring.json';
import faq from '../locales/faq.json';
import about from '../locales/about.json';

export const languages = ['en', 'de', 'nl'];
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
      seo: seo.de,
      index: index.de,
      'tech-hiring': techHiring.de,
      faq: faq.de,
      about: about.de
    },
    en: {
      footer: footer.en,
      header: header.en,
      general,
      seo: seo.en,
      index: index.en,
      'tech-hiring': techHiring.en,
      faq: faq.en,
      about: about.en
    },
    nl: {
      footer: footer.nl,
      header: header.nl,
      general,
      seo: seo.nl,
      index: index.nl,
      'tech-hiring': techHiring.nl,
      faq: faq.nl,
      about: about.nl
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
