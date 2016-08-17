import expect from 'expect';
import FlashMessages from '../../app/js/utils/flash-messages';

const mockCookie = {
  cookie: {
    'honeypot_flash': 11
  },
  get(name) {
    if (name) {
      return this.cookie[name];
    } else {
      return this.cookie;
    }
  },
  set(name, value) {
    this.cookie[name] = value;
  },
  populate() {
    this.set('honeypot_flash', 11);
  }
};

const mockContainer = {
  className: 'hide',
  textContent: '',
  removeClass() {
    this.className = '';
    return this;
  },
  addClass(className) {
    this.className += (' ' + className);
    this.text('');
  },
  hasClass(className) {
    return this.className.indexOf(className) >= 0;
  },
  text(content) {
    this.textContent = content;
  } 
}

const mockDomains = ['localhost:4000', 'localhost:3000'];

beforeEach(() => {
  mockCookie.populate();
  mockContainer.addClass('hide');
});

describe('Flash Messages', () => {
  describe('It displays the message', () => {
    it('should display the message and remove hide class', () => {
      const flashMessage = new FlashMessages(mockContainer, mockCookie, mockDomains);
      flashMessage.showCurrent();
      expect(mockContainer.textContent).toEqual('You have been added to the waiting list.');
      expect(mockContainer.className).toNotMatch(/hide/);
    });

    it('should display the second message on a second call', () => {
      const flashMessage = new FlashMessages(mockContainer, mockCookie, mockDomains);
      flashMessage.showCurrent();
      flashMessage.showCurrent();
      expect(mockContainer.textContent).toEqual('');
      expect(mockContainer.className).toMatch(/hide/);
    });
  });

  describe('It Edits the cookie correctly', () => {
    it('should set the cookie value to undisplayed messages', () => {
      const flashMessage = new FlashMessages(mockContainer, mockCookie, mockDomains);
      flashMessage.showCurrent();
      expect(mockCookie.get('honeypot_flash')).toEqual(10);
    });
  });
});




