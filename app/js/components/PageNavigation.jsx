import React from 'react';
import buildUrl from '../utils/build-url.js';
import UserSession from '../utils/user-session';

const userSession = new UserSession();
const showDeveloperEmployersLink = () => {
  if (window.location.pathname === '/pages/for_employers') {
    return [
      <li key="for_developers"><a href={buildUrl('/')}>For Developers</a></li>
    ];
  } else {
    return [
      <li key="for_employers"><a href={buildUrl('/pages/for_employers')}>For Employers</a></li>
    ];
  }
};


const showLinks = () => {
  const base = [
    <li key="how_it_works"><a href={buildUrl('/pages/how_it_works')}>How it works</a></li>
  ];
  let links;
  if(!userSession.isLoggedIn()) {
    links = [
      ...showDeveloperEmployersLink(),
      <li key="about" className="c-navigation__mobile"><a href={buildUrl('/pages/about')}>About</a></li>,
      <li key="blog" className="c-navigation__mobile"><a href="http://blog.honeypot.io/">Blog</a></li>,
      <li key="autotech" className="c-navigation__mobile"><a href="https://honeypotio.github.io/research/">Research</a></li>,
      <li key="dropdown" className="c-navigation__company dropdown">
        <a href="#" className="dropdown-toggle text-primary" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Company <span className="caret"></span> </a>
        <ul className="c-navigation__dropdown  dropdown-menu">
          <li><a href={buildUrl('/pages/about')}>About</a></li>
          <li><a href="http://blog.honeypot.io/">Blog</a></li>
          <li><a href="https://honeypotio.github.io/research/">Research</a></li>
        </ul>
      </li>,
      <li key="sign_in"><a href={buildUrl('/users/login', 'app_host')}>Login</a></li>,
      <li key="sign up"><span><a href={buildUrl('/users/sign_up')} className="btn btn-primary navbar-btn">Sign up</a></span></li>
    ];
  }

  if(userSession.isTalent()) {
    links = [
      <li key="profile"><a href={buildUrl('/profile', 'app_host')}>Profile</a></li>,
      <li key="sign_out"><a href={buildUrl('/users/sign_out', 'app_host')}>Sign out</a></li>
    ];
  }

  if(userSession.isRecruiter()) {
    links = [
      <li key="company_profile"><a href={buildUrl('/company/profile', 'app_host')}>Company Profile</a></li>,
      <li key="talents"><a href={buildUrl('/company/talents/search', 'app_host')}>Talents</a></li>,
      <li key="sign_out"><a href={buildUrl('/users/sign_out', 'app_host')}>Sign out</a></li>
    ];
  }

  return [base, ...links];
};


export default (props) => {
  return (
    <ul className="nav navbar-nav">
      {showLinks()}
    </ul>
  );
};
