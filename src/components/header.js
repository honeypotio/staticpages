import React from 'react';
import Navigation from './navigation';
import logo from '../../app/assets/images/logo.svg';
import { getLang } from '../utils/i18n';
import Link from 'gatsby-link';

const links = ['for-talents', 'for-employers', 'Comunity']
const lang = getLang();

export default () => (
  <header className="header container">
      {/*Company Logo*/}
      <Link to="/">
        <img src={ logo } className="header__logo"/>
      </Link>
      <Navigation />
      {/*Language Sellection*/}
      <div className="header__lang-switch">{lang.toUpperCase()}</div>
  </header>
)
