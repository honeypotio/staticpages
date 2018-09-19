import React from 'react';
import { I18n } from 'react-i18next';
//import './header.scss';

const links = ['for-talents', 'for-employers', 'Comunity']

export default () => (
  <div className="c-navigation">
    <I18n ns={ ['header'] }>
      { t =>
      <div className="nav">
        <ul>
          {links.map((i) =>
            <li>{t(i)}</li>
          )}
        </ul>
        <button>{t('sign-up')}</button>
      </div>
      }
    </I18n>
  </div>
)
