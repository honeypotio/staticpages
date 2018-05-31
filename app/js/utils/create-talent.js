import 'whatwg-fetch';
import Cookies from 'js-cookie';
import dataFetcher from './data-fetcher';
import UserSession from './user-session';

const userSession = new UserSession();

export default {
  perform(values) {
    return fetch(dataFetcher.buildURL('/api/v1/users'), {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        user: {
          firstname: values.firstName,
          lastname: values.lastName,
          email: values.email,
          password: values.password,
          terms_of_service: 1
        },
        commit: 'Join Honeypot'
      })
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.responseText);
      }
      return response.json();
    })
    .then(({ user_id, token, email }) => {
      userSession.persist(user_id, token, email, $PROCESS_ENV_COOKIE_DOMAIN);
    });
  }
};
