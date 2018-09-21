import React from 'react';
import { I18n } from 'react-i18next';
import logo from '../../app/assets/images/logo-bear.svg';
import { languages, getLang, getPathLang } from '../utils/i18n';
import Link from 'gatsby-link';

const column = ['for-talents', 'for-employers', 'community']
const year = (new Date()).getFullYear();
// currently chosen language
const lang = getLang();
const plang = getPathLang();
const prefix = '/' + (plang === '' ? '' : plang + '/');

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
                    <li key={ i } className={`footer__lang-item ${a}`}>
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
            <Link className="footer__link" to={ prefix }>
              { t('header:for-talents') }
            </Link>
          </h5>
        </div>
        <div className="footer__column">
          <h5 className="footer__headline">
            <Link className="footer__link" to={ `${prefix}tech-hiring` }>
              { t('header:for-employers') }
            </Link>
          </h5>
          <ul className="footer__link-list">
            <Link className="footer__link" to={
              `${prefix}tech-hiring#pricing` }>
              <li className="footer__link-item">{ t('pricing') }</li>
            </Link>
          </ul>
        </div>
        <div className="footer__column">
          <h5 className="footer__headline">
            <Link className="footer__link" to={ `${prefix}about` }>
              { t('header:about-us') }
            </Link>
          </h5>
          <ul className="footer__link-list">
            <li className="footer__link-item">
              <Link className="footer__link" to={
                "https://jobs.lever.co/honeypot" }>
                { t('careers') }
              </Link>
            </li>
            <li className="footer__link-item">
              <Link className="footer__link" to={ `${prefix}faq` }>
                { t('FAQ') }
              </Link>
            </li>
            <li className="footer__link-item">
              <Link className="footer__link" to={ `${prefix}legal-notice` }>
                { t('legal-notice') }
              </Link>
            </li>
            <li className="footer__link-item">
              <Link className="footer__link" to={ `${prefix}privacy-policy` }>
                { t('privacy-policy') }
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h5 className="footer__headline">
            <Link className="footer__link" to={ `${prefix}community` }>
              { t('Community') }
            </Link>
          </h5>
          <ul className="footer__link-list">
            <li className="footer__link-item">
              <a className="footer__link" href={ "https://blog.honeypot.io" }>
                { t('Blog') }
              </a>
            </li>
            <li className="footer__link-item">
              <a className="footer__link" href={
                "https://www.graphql-europe.org/" }>
                { t('GraphQL Europe') }
              </a>
            </li>
            <li className="footer__link-item">
              <a className="footer__link" href={
                "https://hive.honeypot.io/hive-conference-2018/" }>
                { t('hive-con') }
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h5 className="footer__headline">
            { t('We\'re Social too!') }
          </h5>
          <ul className="footer__link-list">
            <li className="footer__link-item">
              <a href="https://twitter.com/honeypotio">Twitter</a>
            </li>
            <li className="footer__link-item">
              <a href="https://www.facebook.com/Honeypotio">Facebook</a>
            </li>
            <li className="footer__link-item">
              <a href="https://www.linkedin.com/company/honeypot/">LinkedIn</a>
            </li>
            <li className="footer__link-item">
              <a href="https://github.com/honeypotio">Github</a>
            </li>
            <li className="footer__link-item">
              <a href="https://www.instagram.com/honeypot.io">Instagram</a>
            </li>
            <li className="footer__link-item">
              <a href="https://www.youtube.com/channel/UCsUalyRg43M8D60mtHe6YcA/videos">Youtube</a>
            </li>
          </ul>
        </div>
      </footer>
      }
    </I18n>
)
