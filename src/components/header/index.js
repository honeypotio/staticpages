import React from 'react';
import Navigation from './navigation';
import logo from '../../../app/assets/images/logo.svg';
import { getLang } from '../../utils/i18n';
import Link from 'gatsby-link';
import PageIntro from './page-intro';
import CompanyBar from './company-bar';
import getCurrentPage from '../../utils/page'
import Wrapper from '../wrapper';

const links = ['for-talents', 'for-employers', 'Comunity']
const lang = getLang();

export default () => {
  const page = getCurrentPage();
  const extendedHeader = (page === 'index' || page === 'tech-hiring');
  return (
    <div>
      <header className={`header header--${page}`}>
        <div className="header__controls wrapper">
          {/*Company Logo*/}
          <Link to="/">
            <img src={ logo } className="header__logo"/>
          </Link>
          <Navigation />
          {/*Language Sellection*/}
          <div className="header__lang-switch">{lang.toUpperCase()}</div>
        </div>

        { extendedHeader && <Wrapper><PageIntro /></Wrapper> }
      </header>
      { extendedHeader && <Wrapper><CompanyBar /></Wrapper> }
    </div>)
} 
