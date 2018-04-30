import 'whatwg-fetch';
import Cookies from 'js-cookie';
import dataFetcher from './data-fetcher';
import UserSession from './user-session';

const userSession = new UserSession();

export default {
  perform(values) {
    return fetch('https://staging-honeypot-pr-2404.herokuapp.com/api/v1/users', {
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
          password: values.password
        }
      })
    }).then(response => response.json())
    .then(({ user_id, token, email }) => {
      userSession.persist(user_id, token, email, '.herokuapp.com');
    });
  }
};
