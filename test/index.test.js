import * as bigscreenUtil from '../index.js';

test('parseFloat', () => {
  expect(bigscreenUtil.parseFloat(10000)).toBe(10000);
  expect(bigscreenUtil.parseFloat(10000.88)).toBe(10000.88);
  expect(bigscreenUtil.parseFloat('10000')).toBe(10000);
  expect(bigscreenUtil.parseFloat('--')).toBe(0);
  expect(bigscreenUtil.parseFloat(null)).toBe(0);
  expect(bigscreenUtil.parseFloat(undefined)).toBe(0);
});

test('parseInt', () => {
  expect(bigscreenUtil.parseInt(10000.888)).toBe(10000);
  expect(bigscreenUtil.parseInt('10000.888')).toBe(10000);
  expect(bigscreenUtil.parseInt(null)).toBe(0);
  expect(bigscreenUtil.parseInt(undefined)).toBe(0);
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
  expect(bigscreenUtil.isNullOrUndefined(10)).toBe(false);
});

test('isNullOrUndefinedOrEmptyString', () => {
  expect(bigscreenUtil.isNullOrUndefinedOrEmptyString(null)).toBe(true);
  expect(bigscreenUtil.isNullOrUndefinedOrEmptyString(undefined)).toBe(true);
  expect(bigscreenUtil.isNullOrUndefinedOrEmptyString("")).toBe(true);
  expect(bigscreenUtil.isNullOrUndefined("10")).toBe(false);
});

test('isJSONStr', () => {
  expect(bigscreenUtil.isJSONStr('{"a": "1"}')).toBe(true);
  expect(bigscreenUtil.isJSONStr(null)).toBe(false);
  expect(bigscreenUtil.isJSONStr(undefined)).toBe(false);
  expect(bigscreenUtil.isJSONStr("")).toBe(false);
  expect(bigscreenUtil.isJSONStr("10")).toBe(false);
});

test('parseFloatByFixed', () => {
  expect(bigscreenUtil.parseFloatByFixed(10000.888, 2)).toBe("10000.89");
  expect(bigscreenUtil.parseFloatByFixed("10000.666", 2)).toBe("10000.67");
  expect(bigscreenUtil.parseFloatByFixed("10000", 2)).toBe("10000.00");
  expect(bigscreenUtil.parseFloatByFixed('--')).toBe("");
  expect(bigscreenUtil.parseFloatByFixed(null)).toBe("");
  expect(bigscreenUtil.parseFloatByFixed(undefined)).toBe("");
})