import Router from '../app/js/utils/Router';
import expect from 'expect';


describe('Router', () => {
  it('should return proper component name for given url', () => {
    const router = new Router({
      '/users/sign_up': 'SignUpForm',
      '/invite_requests/new': 'InviteRequestForm'
    });
    expect(router.componentFromPathName('/users/sign_up'))
      .toEqual('SignUpForm');
    expect(router.componentFromPathName('/invite_requests/new'))
      .toEqual('InviteRequestForm');
  });
});
