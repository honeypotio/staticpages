import ReactDOM from 'react-dom';
import React from 'react';
import SignupForm from 'js/components/SignupForm';
import JoinForm from 'js/components/JoinForm';
import PageNavigation from 'js/components/PageNavigation';
import InviteRequestForm from 'js/components/InviteRequestForm';
import Cookies from 'js-cookie';
import FlashMessages from 'js/utils/flash-messages';
import UserSession from 'js/utils/user-session';
import buildUrl from 'js/utils/build-url';
import parsePathname from 'js/utils/parse-pathname';
import UTMParams from 'js/utils/utm-params';
import String from 'js/utils/string-polyfill';

const userSession = new UserSession();
const utmParams = new UTMParams(location.search, Cookies, $PROCESS_ENV_COOKIE_DOMAIN);

if (userSession.isLoggedIn()) {
  if (parsePathname(window.location.pathname) === '/' &&
      !document.referrer.startsWith($PROCESS_ENV_APP_HOST)) {
    let url;
    if(userSession.isTalent()) {
      url = buildUrl('/profile', 'app_host');
    } else {
      url = buildUrl('/company/talents/search', 'app_host');
    }
    window.location.href = url;
  }
}

const router = {
  '/users/sign_up': SignupForm,
  '/invite_requests/new': InviteRequestForm,
  '/lp/join': JoinForm,
  '/lp/de': JoinForm
};
const load = () => {
  const pathname = parsePathname(window.location.pathname);
  const appShell = document.getElementById('app');
  const pageNavigationShell = document.getElementById('navigation');

  if(appShell && router[parsePathname(pathname)]) {
    ReactDOM.render(
      React.createElement(router[pathname]),
      appShell
    );
  }

  if (pageNavigationShell) {
    ReactDOM.render(
      React.createElement(PageNavigation),
      pageNavigationShell
    );
  }
};

$(document).ready(() => {
  const flashMessagesService = new FlashMessages($('#flash-messages'));
  flashMessagesService.showCurrent();
  load();
  $.cookieBar({
    acceptText: '&times;',
    message: '<span>Honeypot uses cookies to make your experience better.</span>',
    policyButton: true,
    policyText: 'More info',
    policyURL: 'https://www.honeypot.io/pages/legal_notice#privacy_policy'
  });
});
