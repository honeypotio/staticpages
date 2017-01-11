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
      userSession.persist(user_id, token, email, $PROCESS_ENV_COOKIE_DOMAIN);
    });
  }
};
