import Cookies from 'js-cookie';

export default {
  buildURL(url) {
    const host = $PROCESS_ENV_API_HOST || '/';
    return `${host}${url}`;
  }
};
