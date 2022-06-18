/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
import * as numberUtil from '../src/util/numberUtil';

test('parseInt', () => {
  expect(numberUtil.parseInt(10000.888)).toBe(10000);
  expect(numberUtil.parseInt('10000.888')).toBe(10000);
  expect(numberUtil.parseInt(null)).toBe(0);
  expect(numberUtil.parseInt(undefined)).toBe(0);
});

test('parseFloat', () => {
  expect(numberUtil.parseFloat(10000)).toBe(10000);
  expect(numberUtil.parseFloat(10000.88)).toBe(10000.88);
  expect(numberUtil.parseFloat('10000')).toBe(10000);
  expect(numberUtil.parseFloat('--')).toBe(0);
  expect(numberUtil.parseFloat(null)).toBe(0);
  expect(numberUtil.parseFloat(undefined)).toBe(0);
});

test('parseFloatByFixed', () => {
  expect(numberUtil.parseFloatByFixed(10000.888, 2)).toBe('10000.89');
  expect(numberUtil.parseFloatByFixed('10000.666', 2)).toBe('10000.67');
  expect(numberUtil.parseFloatByFixed('10000', 2)).toBe('10000.00');
  expect(numberUtil.parseFloatByFixed('--')).toBe('');
  expect(numberUtil.parseFloatByFixed(null)).toBe('');
  expect(numberUtil.parseFloatByFixed(undefined)).toBe('');
});
