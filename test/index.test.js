import * as bigscreenUtil from '../index.js';

test('parseFloat', () => {
  expect(bigscreenUtil.parseFloat('10000')).toBe(10000);
});

test('parseInt', () => {
  expect(bigscreenUtil.parseInt('10000.888')).toBe(10000);
});

test('addLeftZero', () => {
  expect(bigscreenUtil.addLeftZero(500, 5)).toBe("00500");
});

test('equallyDivide', () => {
  expect(bigscreenUtil.equallyDivide(
    ["1", "2", "3", "4", "5", "6"], 2
  )).toEqual([["1", "2"], ["3", "4"], ["5", "6"]]);
});

test('isNullOrUndefined', () => {
  expect(bigscreenUtil.isNullOrUndefined(null)).toBe(true);
  expect(bigscreenUtil.isNullOrUndefined(undefined)).toBe(true);
});

test('isNullOrUndefinedOrEmptyString', () => {
  expect(bigscreenUtil.isNullOrUndefinedOrEmptyString(null)).toBe(true);
  expect(bigscreenUtil.isNullOrUndefinedOrEmptyString(undefined)).toBe(true);
  expect(bigscreenUtil.isNullOrUndefinedOrEmptyString("")).toBe(true);
});