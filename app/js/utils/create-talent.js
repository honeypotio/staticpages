import 'whatwg-fetch';
import Cookies from 'js-cookie';

export default {
  perform(values) {
    const host = $PROCESS_ENV_API_HOST || '/';
    return fetch(`${host}/api/v1/users`, {
      method: 'POST',
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
    Cookies.set('honeypot_esa', this._generateLSToken(userId, token, email));
  },

  _generateLSToken(userId, token, email) {
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
