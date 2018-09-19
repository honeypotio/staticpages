import React from 'react';
import { I18n } from 'react-i18next';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <I18n ns={ "index" }>
      {
        t => <div>{t('message')} Index</div>
      }
    </I18n>
  </Layout>
)
