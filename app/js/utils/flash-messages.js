import Cookies from 'js-cookie';
const cookieName = 'honeypot-flash';
export default class FlashMessages {
  constructor($container) {
    this.$container = $container;
    this.timeout = 5000;
    this.type = 'warning';
  }

  showCurrent($container) {
    const flashContent = Cookies.get(cookieName);
    if(flashContent) {
      this.$container.removeClass('hide').text(flashContent);
      this._hideAfterDelay();
    }
  }

  static setMessage(message) {
    Cookies.set(cookieName, message);
  }

  _hideAfterDelay() {
    setTimeout(() => {
      this.$container.addClass('hide');
      Cookies.remove(cookieName);
    }, this.timeout);
  }
}
