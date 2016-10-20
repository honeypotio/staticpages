import expect from 'expect';
import parsePathname from '../../app/js/utils/parse-pathname';

describe('parsePathname', () => {
  it('should return pathname when not a pull request', () => {
    const expected = '/pages/how_it_works';
    const actual = parsePathname('/pages/how_it_works');
    expect(actual).toEqual(expected);
  });

  it('should strip name of pull request from pathname', () => {
    const expected = '/pages/how_it_works';
    const actual = parsePathname('/pr-13/pages/how_it_works');
    expect(actual).toEqual(expected);
  });
});
