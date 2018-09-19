import React from 'react';
import { I18n } from 'react-i18next';

export default () => (
  <I18n ns={ ['header', 'footer'] }>
    { t => () }
  </I18n>
)
