import React from 'react';
import { I18n } from 'react-i18next';

const column = ['for-talents', 'for-employers', 'community']
const year = (new Date()).getFullYear();

export default () => (
    <I18n ns={ ['footer', 'header'] }>
      { t => 
      <footer className="footer container">
        <div className="footer__column">
          <img src="" />
          { t('copyright', { year }) }
        </div> 
        <div className="footer__column">
          <h5 className="footer__headline">
            { t('header:for-talents') }
          </h5>
        </div>
        <div className="footer__column">
          <h5 className="footer__headline">
            { t('header:for-employers') }
          </h5>
          <ul className="footer__link-list">
            <li className="footer__link-item">{ t('pricing') }</li>
          </ul>
        </div>
        <div className="footer__column">
          <h5 className="footer__headline">
            { t('header:about-us') }
          </h5>
          <ul className="footer__link-list">
            <li className="footer__link-item">{ t('FAQ') }</li>
            <li className="footer__link-item">{ t('legal-notice') }</li>
            <li className="footer__link-item">{ t('privacy-policy') }</li>
          </ul>
        </div>
        <div className="footer__column">
          <h5 className="footer__headline">
            { t('Community') }
          </h5>
          <ul className="footer__link-list">
            <li className="footer__link-item">{ t('Blog') }</li>
            <li className="footer__link-item">{ t('GraphQL Europe') }</li>
            <li className="footer__link-item">{ t('hive-con') }</li>
          </ul>
        </div>
      </footer>
      }
    </I18n>
)
