import React from 'react';
import { I18n } from 'react-i18next';
import '../styles/navigation.scss';

const links = ['for-talents', 'for-employers', 'Community']

export default () => (
  <div className="c-navigation">
    <I18n ns={ ['header'] }>
      { t =>
      <div className="navbar">
        <ul className="nav navbar-nav">
          {links.map((i) =>
            <li className="nav__nav-item">{t(i)}</li>
          )}
        </ul>
        <button>{t('sign-up')}</button>
      </div>
      }
    </I18n>
  </div>
)

