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
    <li key="how_does_it_work"><a href={buildUrl('/pages/how_does_it_work')}>How does it work</a></li>
  ];
  let links;
  if(!userSession.isLoggedIn()) {
    links = [
      ...showDeveloperEmployersLink(),
      <li key="blog"><a href="http://blog.honeypot.io/" target="_blank">Blog</a></li>,
      <li key="sign_in"><a href={buildUrl('/users/sign_in', 'app_host')}>Sign in</a></li>,
      <li key="sign up"><a href={buildUrl('/users/sign_up')}>Sign up</a></li>
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
