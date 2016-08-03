import ReactDOM from 'react-dom';
import React from 'react';
import SignupForm from 'js/components/SignupForm';
import InviteRequestForm from 'js/components/InviteRequestForm';
import Cookies from 'js-cookie';
import FlashMessages from 'js/utils/flash-messages';

const router = {
  '/users/sign_up': SignupForm,
  '/invite_requests/new': InviteRequestForm
};

const load = () => {
  const pathname = window.location.pathname.replace(/pr-[0-9]+\//, '');
  if(!router[pathname]) return;

  ReactDOM.render(
    React.createElement(router[pathname]),
    document.querySelector('#app')
  );
};

const showNavigationLink = (page) => {
  if (page === '/pages/for_employers') {
    $('#developers-link').removeClass('hide');
    $('#employers-link').addClass('hide');
  } else {
    $('#employers-link').removeClass('hide');
    $('#developers-link').addClass('hide');
  }
};

$(document).ready(() => {
  showNavigationLink(window.location.pathname);
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
