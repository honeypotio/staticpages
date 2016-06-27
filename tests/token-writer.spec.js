import createLSKey  from '../app/js/utils/create-ls-key';
import expect from 'expect';


describe('Token Writer', () => {
  it('it should create a proper localStorage key', () => {
    const email = 'test@home.local';
    const token = 'SECRET_TOKEN'
    const userId = 34;
    const lsKey = createLSKey(email, token, userId);
    expect(lsKey).toEqual('{"authenticated":{"authenticator":"authenticator:devise","email":"test@home.local","token":"SECRET_TOKEN","user_id":34}}');
  });
});
