/* eslint-disable no-undef */
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

test('parseFloatValueByFixed', () => {
  expect(numberUtil.parseFloatValueByFixed(10000.888, 2, 1)).toBe(10000.89);
  expect(numberUtil.parseFloatValueByFixed('10000.666', 2)).toBe(10000.67);
  expect(numberUtil.parseFloatValueByFixed('10000', 2, 1)).toBe(10000.00);
  expect(numberUtil.parseFloatValueByFixed('10000', 1, 1)).toBe(10000.0);
  expect(numberUtil.parseFloatValueByFixed('--', 2, 1)).toBe(1);
  expect(numberUtil.parseFloatValueByFixed(null, 2, 1)).toBe(1);
  expect(numberUtil.parseFloatValueByFixed(undefined, 2, 1)).toBe(1);
});

test('toLocaleString', () => {
  expect(numberUtil.toLocaleString(10000.888)).toBe('10,000.888');
  expect(numberUtil.toLocaleString('10000.666')).toBe('10,000.666');
  expect(numberUtil.toLocaleString('10000')).toBe('10,000');
  expect(numberUtil.toLocaleString(10000)).toBe('10,000');
  expect(numberUtil.toLocaleString('--')).toBe('');
  expect(numberUtil.toLocaleString(null)).toBe('');
  expect(numberUtil.toLocaleString(undefined)).toBe('');
});

test('parseFloatByFixedOneDecimalPlace', () => {
  expect(numberUtil.parseFloatByFixedOneDecimalPlace(10000.888)).toBe('10000.9');
  expect(numberUtil.parseFloatByFixedOneDecimalPlace('10000.666')).toBe('10000.7');
});

test('parseFloatByFixedTwoDecimalPlace', () => {
  expect(numberUtil.parseFloatByFixedTwoDecimalPlace(10000.888)).toBe('10000.89');
  expect(numberUtil.parseFloatByFixedTwoDecimalPlace('10000.631')).toBe('10000.63');
});

test('getPercentNumber', () => {
  expect(numberUtil.getPercentNumber(0.98785, 2)).toBe('98.78');
  expect(numberUtil.getPercentNumber(0.98786, 2)).toBe('98.79');
  expect(numberUtil.getPercentNumber(0.6321, 2)).toBe('63.21');
  expect(numberUtil.getPercentNumber('0.9988', 2)).toBe('99.88');
  expect(numberUtil.getPercentNumber('--', 2)).toBe('0.00');
  expect(numberUtil.getPercentNumber(null, 2)).toBe('0.00');
  expect(numberUtil.getPercentNumber(undefined, 2)).toBe('0.00');
  expect(numberUtil.getPercentNumber(1, 2)).toBe('100.00');
});

test('getPercentNumberValue', () => {
  expect(numberUtil.getPercentNumberValue(0.98785, 2)).toBe(98.78);
  expect(numberUtil.getPercentNumberValue(0.98786, 2)).toBe(98.79);
  expect(numberUtil.getPercentNumberValue(0.6321, 2)).toBe(63.21);
  expect(numberUtil.getPercentNumberValue('0.9988', 2)).toBe(99.88);
  expect(numberUtil.getPercentNumberValue('--', 2)).toBe(0);
  expect(numberUtil.getPercentNumberValue(null, 2)).toBe(0);
  expect(numberUtil.getPercentNumberValue(undefined, 2)).toBe(0);
  expect(numberUtil.getPercentNumberValue(1, 2)).toBe(100);
});

test('getPercentNumberByDefaultValue', () => {
  expect(numberUtil.getPercentNumberByDefaultValue(0.98785, 2, 1)).toBe('98.78');
  expect(numberUtil.getPercentNumberByDefaultValue(0.98786, 2, 1)).toBe('98.79');
  expect(numberUtil.getPercentNumberByDefaultValue(0.6321, 2, 1)).toBe('63.21');
  expect(numberUtil.getPercentNumberByDefaultValue('0.9988', 2, 1)).toBe('99.88');
  expect(numberUtil.getPercentNumberByDefaultValue('--', 2, 1)).toBe('100.00');
  expect(numberUtil.getPercentNumberByDefaultValue('', 2)).toBe('100.00');
});

test('getPercentNumberValueByDefaultValue', () => {
  expect(numberUtil.getPercentNumberValueByDefaultValue(0.98785, 2, 1)).toBe(98.78);
  expect(numberUtil.getPercentNumberValueByDefaultValue(0.98786, 2, 1)).toBe(98.79);
  expect(numberUtil.getPercentNumberValueByDefaultValue(0.6321, 2, 1)).toBe(63.21);
  expect(numberUtil.getPercentNumberValueByDefaultValue('0.9988', 2, 1)).toBe(99.88);
  expect(numberUtil.getPercentNumberValueByDefaultValue('--', 2, 1)).toBe(100);
  expect(numberUtil.getPercentNumberValueByDefaultValue('', 2)).toBe(100);
  expect(numberUtil.getPercentNumberValueByDefaultValue('0', 2)).toBe(100);
});

test('getPercentNumberByDefaultStr', () => {
  expect(numberUtil.getPercentNumberByDefaultStr(null, 2, '——')).toBe('——');
  expect(numberUtil.getPercentNumberByDefaultStr('0.9988', 2, '——')).toBe('99.88');
});

test('getPercentNumberValueByDefaultStr', () => {
  expect(numberUtil.getPercentNumberValueByDefaultStr(null, 2, '——')).toBe('——');
  expect(numberUtil.getPercentNumberValueByDefaultStr('0.9988', 2, '——')).toBe(99.88);
});
