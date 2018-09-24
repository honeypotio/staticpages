import React from 'react';
import { I18n } from 'react-i18next';

const links = ['for-talents', 'for-employers', 'Community']

export default () => (
  <I18n ns={ ['header'] }>
    { t =>
    <nav className="header__nav">
      <ul className="header__link-list">
        {links.map(i =>
          <li key={ i } className="header__link-item">{t(i)}</li>
        )}
        <li className="header__link-item header__link-item--button">{t('sign-up')}</li>
      </ul>
    </nav>
    }
  </I18n>
)

