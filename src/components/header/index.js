import React from 'react';
import Navigation from './navigation';
import logo from '../../../app/assets/images/logo.svg';
import { getLang } from '../../utils/i18n';
import Link from 'gatsby-link';
import PageIntro from './page-intro';
import getCurrentPage from '../../utils/page'

const links = ['for-talents', 'for-employers', 'Comunity']
const lang = getLang();

export default () => {
  const page = getCurrentPage();
  return (
    <header className="header">
      <div className="header__controls container">
        {/*Company Logo*/}
        <Link to="/">
          <img src={ logo } className="header__logo"/>
        </Link>
        <Navigation />
        {/*Language Sellection*/}
        <div className="header__lang-switch">{lang.toUpperCase()}</div>
      </div>

      <div className="header__introduction container">
        { (page === 'index' || page === 'tech-hiring') &&
          <PageIntro />
        }
      </div>
    </header>)
} 
