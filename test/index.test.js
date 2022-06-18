/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
import * as bigscreenUtil from '../index.js';

test('equallyDivide', () => {
  expect(bigscreenUtil.equallyDivide(['1', '2', '3', '4', '5', '6'], 2)).toEqual([['1', '2'], ['3', '4'], ['5', '6']]);
});
