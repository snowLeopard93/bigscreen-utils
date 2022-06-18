/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
import * as stringUtil from '../src/util/stringUtil';

test('addLeftZero', () => {
  expect(stringUtil.addLeftZero(500, 5)).toBe('00500');
});

test('isJSONStr', () => {
  expect(stringUtil.isJSONStr('{"a": "1"}')).toBe(true);
  expect(stringUtil.isJSONStr(null)).toBe(false);
  expect(stringUtil.isJSONStr(undefined)).toBe(false);
  expect(stringUtil.isJSONStr('')).toBe(false);
  expect(stringUtil.isJSONStr('10')).toBe(false);
});
