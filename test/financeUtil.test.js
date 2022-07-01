/* eslint-disable no-undef */
import * as financeUtil from '../src/util/financeUtil';

test('getValueByTenThousand', () => {
  expect(financeUtil.getValueByTenThousand(987654)).toBe(98.7654);
  expect(financeUtil.getValueByTenThousand('987654')).toBe(98.7654);
  expect(financeUtil.getValueByTenThousand(null)).toBe(0);
  expect(financeUtil.getValueByTenThousand(undefined)).toBe(0);
});

test('getStrByTenThousandFixedOneDecimalPlace', () => {
  expect(financeUtil.getStrByTenThousandFixedOneDecimalPlace(987654)).toBe('98.8');
  expect(financeUtil.getStrByTenThousandFixedOneDecimalPlace(null)).toBe('0.0');
  expect(financeUtil.getStrByTenThousandFixedOneDecimalPlace(undefined)).toBe('0.0');
});

test('getStrByTenThousandFixedTwoDecimalPlace', () => {
  expect(financeUtil.getStrByTenThousandFixedTwoDecimalPlace(987654)).toBe('98.77');
  expect(financeUtil.getStrByTenThousandFixedTwoDecimalPlace(null)).toBe('0.00');
  expect(financeUtil.getStrByTenThousandFixedTwoDecimalPlace(undefined)).toBe('0.00');
});

test('getValueByTenThousandFixedOneDecimalPlace', () => {
  expect(financeUtil.getValueByTenThousandFixedOneDecimalPlace(987654)).toBe(98.8);
  expect(financeUtil.getValueByTenThousandFixedOneDecimalPlace(null)).toBe(0.0);
  expect(financeUtil.getValueByTenThousandFixedOneDecimalPlace(undefined)).toBe(0.0);
});

test('getValueByTenThousandFixedTwoDecimalPlace', () => {
  expect(financeUtil.getValueByTenThousandFixedTwoDecimalPlace(987654)).toBe(98.77);
  expect(financeUtil.getValueByTenThousandFixedTwoDecimalPlace(null)).toBe(0.00);
  expect(financeUtil.getValueByTenThousandFixedTwoDecimalPlace(undefined)).toBe(0.00);
});

test('getValueByTenThousandFixedOneIgnoreZero', () => {
  expect(financeUtil.getValueByTenThousandFixedOneIgnoreZero('0.0')).toBe(0);
  expect(financeUtil.getValueByTenThousandFixedOneIgnoreZero(null)).toBe(0);
  expect(financeUtil.getValueByTenThousandFixedOneIgnoreZero(undefined)).toBe(0);
});

test('getValueByTenThousandFixedTwoIgnoreZero', () => {
  expect(financeUtil.getValueByTenThousandFixedTwoIgnoreZero('0.00')).toBe(0);
});
