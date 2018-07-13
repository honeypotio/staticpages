let closeHandler;

export default {
  banner: document.querySelector('.js-banner'),

  show() {
    const cookieBar = document.querySelector('#cookie-bar');
    const hasSeenBanner = window.localStorage.getItem('elixir');
    closeHandler = () => {
      this.hide();
    };
    if (!(cookieBar || hasSeenBanner)) {
      this.banner.classList.add('c-landing-banner--show');
      document.querySelector('.js-banner-close').addEventListener('click', closeHandler);
    }
  },

  hide() {
    window.localStorage.setItem('elixir', true);
    document.querySelector('.js-banner-close').removeEventListener('click', closeHandler);
    this.banner.remove();
  }
};
