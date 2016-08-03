import expect from 'expect';
import parsePathname from '../../app/js/utils/parse-pathname';

describe('parsePathname', () => {
  it('should return pathname when not a pull request', () => {
    const expected = '/pages/how_does_it_work';
    const actual = parsePathname('/pages/how_does_it_work');
    expect(actual).toEqual(expected);
  });

  it('should strip name of pull request from pathname', () => {
    const expected = '/pages/how_does_it_work';
    const actual = parsePathname('/pr-13/pages/how_does_it_work');
    expect(actual).toEqual(expected);
  });
});
