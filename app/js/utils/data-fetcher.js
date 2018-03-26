import Cookies from 'js-cookie';

export default {
  buildURL(url) {
    const host = $PROCESS_ENV_API_HOST || '/';
    return `https://staging-honeypot-pr-2404.herokuapp.com${url}`;
  }
};
