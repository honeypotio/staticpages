import expect from 'expect';
import UTMParams from '../../app/js/utils/utm-params';

const mockCookie = {
  cookie: {},
  get(name) {
    if (name) {
      this.cookie[name];
    } else {
      return this.cookie;
    }
  },
  set(name, value) {
    this.cookie[name] = value;
  },
  clean() {
    this.cookie = {};
  }
}

// Empties mock cookie
afterEach(()=> {
  mockCookie.clean();
});

describe('UTMParams', () => {
  describe('#UTMParams present', () => {
    it('should parse the correct params', () => {
      const mockParams = '?utm_medium=twitter&utm_campaign=fb&channel=berlin&ga=22';
      const utmParams = new UTMParams(mockParams, mockCookie);
      expect(mockCookie.get()).toEqual({
        'u_medium': 'twitter',
        'u_campaign': 'fb'
      });
    });
  });

  describe('#UTMParams empty', () => {
    it('should have no set no utm params', () => {
      const emptyParams = '?';
      const utmParams = new UTMParams(emptyParams, mockCookie);
      expect(mockCookie.get()).toEqual({});
    });
  });

  describe('#UTMParams absent', () => {
    it('should ignore the params', () => {
      const nonUTMQuery = '?test=fb&leads=twitter&from=google';
      const utmParams = new UTMParams(nonUTMQuery, mockCookie);
      expect(mockCookie.get()).toEqual({});
    });
  })
});