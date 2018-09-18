import React from 'react';
import { I18n } from 'react-i18next';
import i18n from 'i18next';
import index from './index.json'

const locale = i18n.init({
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

export default () => (
  <I18n i18n={ locale } ns={["index"]}>
    {
      t => <div>{t('message')} Index</div>
    }
  </I18n>
)
