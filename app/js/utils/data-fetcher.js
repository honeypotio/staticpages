import Cookies from 'js-cookie';

export default {
  buildURL(url) {
    const host = $PROCESS_ENV_API_HOST || '/';
    return `${host}${url}`;
  },

  setCookieForStaging() {
    if ($PROCESS_ENV_STAGING_AUTH) {
      Cookies.set('staging_auth', $PROCESS_ENV_STAGING_AUTH);
    }
  },

};
