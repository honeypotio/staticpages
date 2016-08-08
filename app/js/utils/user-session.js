import Cookies from 'js-cookie';

export default class UserSession {
  constructor(cookieProvider = null) {
    this.cookieProvider = cookieProvider || Cookies;
    this.cookieName = 'honeypot_esa';
    this.data = this._getSessionData();
  }

  isLoggedIn() {
    return !!(this.data && !this._isEmpty(this.data.authenticated));
  }

  isTalent() {
    return this._getRole() === 'talent';
  }

  isRecruiter() {
    return this._getRole() === 'recruiter';
  }

  persist(userId, token, email, domain) {
    this.cookieProvider.set(
      this.cookieName,
      this._generateCookie(userId, token, email),
      { domain }
    );
  }

  _generateCookie(userId, token, email) {
    return {
      authenticated: {
        authenticator: "authenticator:devise",
        email: email,
        token: token,
        user_id: userId,
        role: 'talent'
      }
    };
  }

  _getRole() {
    if(!this.data || !this.data.authenticated) {
      return false;
    }
    return this.data.authenticated.role;
  }

  _getSessionData() {
    let data = this.cookieProvider.get('honeypot_esa');
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }

  _isEmpty(object) {
    if(!object) return true;
    return Object.keys(object).length === 0;
  }
}
