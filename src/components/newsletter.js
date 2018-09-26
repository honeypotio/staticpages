import React from 'react';
import Wrapper from './wrapper';
import { I18n } from 'react-i18next';

export default () =>
  <div className="wrapper">
    <I18n ns={ 'index' }>
      { t =>
      <div className="newsletter">
        <h3 className="newsletter__headline">{t('newsletter.headline')}</h3>
        <p className="newsletter__text">{t('newsletter.text')}</p>
        <div className="newsletter__sign-up">
          <input
            type="text"
            placeholder={ t('newsletter.email-placeholder') }
            className="newsletter__email" />
          <button
            type="button"
            className="button button--yellow button--large newsletter__button">{t('newsletter.join')}</button>
        </div>
      </div>}
    </I18n>
  </div>
