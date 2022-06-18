/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
import * as objectUtil from '../src/util/objectUtil';

test('isNullOrUndefined', () => {
  expect(objectUtil.isNullOrUndefined(null)).toBe(true);
  expect(objectUtil.isNullOrUndefined(undefined)).toBe(true);
  expect(objectUtil.isNullOrUndefined(10)).toBe(false);
});

test('isNullOrUndefinedOrEmptyString', () => {
  expect(objectUtil.isNullOrUndefinedOrEmptyString(null)).toBe(true);
  expect(objectUtil.isNullOrUndefinedOrEmptyString(undefined)).toBe(true);
  expect(objectUtil.isNullOrUndefinedOrEmptyString('')).toBe(true);
  expect(objectUtil.isNullOrUndefined('10')).toBe(false);
});
