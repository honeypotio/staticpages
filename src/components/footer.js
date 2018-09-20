import React from 'react';
import { I18n } from 'react-i18next';

export default () => (
  <I18n ns={ ['header', 'footer'] }>
    { t => <div>{ t('copyright', {year: '2018'}) }</div> }
  </I18n>
)
