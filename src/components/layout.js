import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n, { getLang } from '../utils/i18n';

export default ({ children }) => (
  <I18nextProvider i18n={ i18n } initialLanguage={ getLang() }>
    {children}
  </I18nextProvider> 
)
