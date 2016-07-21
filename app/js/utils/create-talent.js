import 'whatwg-fetch';
import Cookies from 'js-cookie';
import dataFetcher from './data-fetcher';

export default {
  cookieName: 'honeypot_esa',

  perform(values) {
    dataFetcher.setCookieForStaging();
    return fetch(dataFetcher.buildURL('/api/v1/users'), {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        user: {
          firstname: values.firstName,
          lastname: values.lastName,
          email: values.email,
          password: values.password
        }
      })
    }).then(response => response.json())
    .then(({ user_id, token, email }) => {
      this._writeToCookie(user_id, token, email);
    });
  },

  _writeToCookie(userId, token, email) {
    Cookies.set(
      this.cookieName,
      this._generateCookie(userId, token, email),
      { domain: $PROCESS_ENV_COOKIE_DOMAIN }
    );
  },

  _generateCookie(userId, token, email) {
    return {
      authenticated: {
        authenticator: "authenticator:devise",
        email: email,
        token: token,
        user_id: userId
      }
    };
  }
};
