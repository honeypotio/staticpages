import ReactDOM from 'react-dom';
import React from 'react';
import App from 'js/components/App';

const load = () => {
  ReactDOM.render(
    <h1>Hello</h1>,
    document.querySelector('#app')
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
