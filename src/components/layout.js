import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n, { getLang } from '../utils/i18n';
import Header from '../components/header';
import Footer from '../components/footer';

export default ({ children }) => (
  <I18nextProvider i18n={ i18n } initialLanguage={ getLang() }>
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  </I18nextProvider> 
)
