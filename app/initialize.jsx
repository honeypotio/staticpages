import ReactDOM from 'react-dom';
import React from 'react';
import SignupForm from 'js/components/SignupForm';

const router = {
  '/users/sign_up': SignupForm
};

const load = () => {
  ReactDOM.render(
    React.createElement(router[window.location.pathname]),
    document.querySelector('#app')
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
