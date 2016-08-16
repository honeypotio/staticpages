import expect from 'expect';
import UserSession from '../../app/js/utils/user-session.js';

const mockCookie = (authenticatedData) => {
  return {
    get() {
      if(!authenticatedData) {
        return undefined;
      }

      return JSON.stringify({ authenticated: authenticatedData });
    }
  }
};

describe('UserSession', () => {
  describe('#isLoggedIn', () => {
    it('returns true when session exists', () => {
      const cookieMock = mockCookie({ user_id: 1 });
      const session = new UserSession(cookieMock);
      expect(session.isLoggedIn()).toEqual(true);
    });

    it('returns false when session doesnt exist', () => {
      const cookieMock = mockCookie(false);
      const session = new UserSession(cookieMock);
      expect(session.isLoggedIn()).toEqual(false);
    });

    it('returns false when authenticated key exists but is empty', () => {
      const cookieMock = mockCookie({});
      const session = new UserSession(cookieMock);
      expect(session.isLoggedIn()).toEqual(false);
    });
  })

  describe('#_getRole', () => {
    it('properly returns role string', () => {
      const cookieMock = mockCookie({ role: 'talent' });
      const session = new UserSession(cookieMock);
      expect(session._getRole()).toEqual('talent');
    });

    it('doesnt blow up when data empty', () => {
      const cookieMock = mockCookie(false);
      const session = new UserSession(cookieMock);
      expect(session._getRole()).toEqual(false);
    });
  });

  describe('#_generateCookie', () => {
    it("generates proper cookie format", () => {
      const cookieMock = mockCookie(false);
      const session = new UserSession(cookieMock);
      expect(session._generateCookie(1, 'SECRET_TOKEN', 'email@email.com'))
        .toEqual({
          authenticated: {
            authenticator: "authenticator:devise",
            email: 'email@email.com',
            role: 'talent',
            token: 'SECRET_TOKEN',
            user_id: 1
          }
        });
    });
  });

  describe('#persist', () => {
    it('saves proper cookie', () => {
      let cookieName, cookieContents, options;
      const cookieMock = {
        get() { return '{}'; },
        set(cName, cContents, cOptions) {
          this.cookieName = cName;
          this.cookieContents = cContents;
          this.options = cOptions;
        }
      };

      const session = new UserSession(cookieMock);
      session.persist(1, 'token', 'email', 'honeypot');
      expect(cookieMock.cookieName).toEqual('honeypot_esa_v1');
      expect(cookieMock.cookieContents).toEqual({
        authenticated: {
          authenticator: "authenticator:devise",
          email: 'email',
          role: 'talent',
          token: 'token',
          user_id: 1
        }
      });
      expect(cookieMock.options).toEqual({ domain: 'honeypot' });
    });
  });
});
