import React from 'react';
import { I18n } from 'react-i18next';
import logo from '../../app/assets/images/logo-bear.svg';
import { languages, getLang } from '../utils/i18n';

const column = ['for-talents', 'for-employers', 'community']
const year = (new Date()).getFullYear();
// currently chosen language
const lang = getLang();

export default () => (
    <I18n ns={ ['footer', 'header'] }>
      { t => 
      <footer className="footer container">
        <div className="footer__column">
          <div className="footer__wrapper">
            <img src={ logo } className="footer__logo" />
            <p>
              { t('copyright', { year }) }
            </p>
            <ul className="footer__lang-switch">
              {
                languages.map(i => {
                  const a = i === lang?"footer__lang-item--active":"";
                  return ( 
                    <li className={["footer__lang-item", a].join(' ')}>
                      { i.toUpperCase() }
                    </li>)
                }
                )
              }
            </ul>
          </div>
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
        <div className="footer__column">
          <h5 className="footer__headline">
            { t('We\'re Social too!') }
          </h5>
          <ul className="footer__link-list">
            <li className="footer__link-item">Twitter</li>
            <li className="footer__link-item">Facebook</li>
            <li className="footer__link-item">Linkedin</li>
            <li className="footer__link-item">Github</li>
            <li className="footer__link-item">Instagram</li>
            <li className="footer__link-item">Youtube</li>
          </ul>
        </div>
      </footer>
      }
    </I18n>
)
