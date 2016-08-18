import Cookies from 'js-cookie';
import CookieDomainMonster from 'cookie-domain-monster';

const cookieName = 'honeypot_flash';

const MessageHash = {
  1 : 'You have been added to the waiting list.'
}

export default class FlashMessages {
  constructor($container, cookieProvider = Cookies, urls = [window.location.pathname, $PROCESS_ENV_APP_HOST]) {
    this.$container = $container;
    this.timeout = 5000;
    this.type = 'warning';
    this._cookieProvider = cookieProvider;
    this.urls = urls;
    this.messageList = [];
  }

  showCurrent() {
    let message = this._getMessages();
    if(message) {
      this.$container.removeClass('hide').text(message);
      this._hideAfterDelay();
    } else {
      this.$container.addClass('hide');
    }
  }

  _getParsedCookie() {
    return Number(this._cookieProvider.get(cookieName));
  }

  _getMessages() {
    let cookie = this._getParsedCookie();
    if (this.messageList.length) {
      return this.messageList.pop();
    }
    if (cookie) {
      let keys = Object.keys(MessageHash).map(Number);
      this.messageList = keys
                      .filter((key) => {
                        return (cookie & key) === key;
                      })
                      .map((key) => {
                        this._removeMessage(key);
                        return MessageHash[key];
                      });
      return this.messageList.pop();
    }
    return '';
  }

  setMessage(messageKey) {
    let currentCookie = Number(this._cookieProvider.get(cookieName));
    this._cookieProvider.set(cookieName, updatedCookie, {
      domain: CookieDomainMonster(this.urls)[0]
    });
  }

  _removeMessage(messageKey) {
    let currentCookie = Number(this._cookieProvider.get(cookieName));
    let updatedCookie = currentCookie - Number(messageKey);
    this._cookieProvider.set(cookieName, updatedCookie, {
      domain: CookieDomainMonster(this.urls)[0]
    });
  }

  _hideAfterDelay() {
    setTimeout(() => {
      this.$container.addClass('hide');
    }, this.timeout);
  }
}
