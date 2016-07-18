import Cookies from 'js-cookie';

export default {
  buildURL(url) {
    const host = $ENVSTATIC_API_HOST || '/';
    return `${host}${url}`;
  },

  setCookieForStaging() {
    if ($ENVSTATIC_STAGING_AUTH) {
      Cookies.set('staging_auth', $ENVSTATIC_STAGING_AUTH, { domain: $ENVSTATIC_COOKIE_DOMAIN });
    }
  },

};
