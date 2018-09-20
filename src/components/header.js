import React from 'react';
import Navigation from './navigation';
import logo from '../../app/assets/images/logo.svg';

const links = ['for-talents', 'for-employers', 'Comunity']

export default () => (
  <header className="header container">
      {/*Company Logo*/}
      <img src={ logo } className="header__logo"/>
      <Navigation />
      {/*Language Sellection*/}
      <div className="header__lang-switch">DE</div>
  </header>
)
