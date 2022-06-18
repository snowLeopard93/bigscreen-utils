/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
import * as arrayUtil from '../src/util/arrayUtil';

test('equallyDivide', () => {
  expect(arrayUtil.equallyDivide(['1', '2', '3', '4', '5', '6'], 2)).toEqual([['1', '2'], ['3', '4'], ['5', '6']]);
});
