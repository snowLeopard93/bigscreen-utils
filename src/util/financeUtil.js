import {
  parseFloat,
  parseFloatByFixedOneDecimalPlace,
  parseFloatByFixedTwoDecimalPlace,
} from './numberUtil';

/**
 * 将传入的值除以10000之后返回
 * @param {*} oldValue
 * @returns
 */
export function getValueByTenThousand(oldValue) {
  const value = parseFloat(oldValue / 10000);
  return value;
}

/**
 * 将传入的值除以10000之后返回保留一位小数的字符串
 * @param {*} oldValue
 * @returns
 */
export function getStrByTenThousandFixedOneDecimalPlace(oldValue) {
  const value = getValueByTenThousand(oldValue);
  const str = parseFloatByFixedOneDecimalPlace(value);
  return str;
}

/**
 * 将传入的值除以10000之后返回保留两位小数的字符串
 * @param {*} oldValue
 * @returns
 */
export function getStrByTenThousandFixedTwoDecimalPlace(oldValue) {
  const value = getValueByTenThousand(oldValue);
  const str = parseFloatByFixedTwoDecimalPlace(value);
  return str;
}

/**
 * 将传入的值除以10000之后返回保留一位小数的值
 * @param {*} oldValue
 * @param {*} ignoreZero 是否忽略值为0的情况
 * @returns
 */
export function getValueByTenThousandFixedOneDecimalPlace(oldValue, ignoreZero) {
  const value = getValueByTenThousand(oldValue);
  if (ignoreZero && value === 0) {
    return value;
  }
  const str = parseFloatByFixedOneDecimalPlace(value);
  const newValue = parseFloat(str);
  return newValue;
}

/**
 * 将传入的值除以10000之后返回保留两位小数的值
 * @param {*} oldValue
 * @param {*} ignoreZero 是否忽略值为0的情况
 * @returns
 */
export function getValueByTenThousandFixedTwoDecimalPlace(oldValue, ignoreZero) {
  const value = getValueByTenThousand(oldValue);
  if (ignoreZero && value === 0) {
    return value;
  }
  const str = parseFloatByFixedTwoDecimalPlace(value);
  const newValue = parseFloat(str);
  return newValue;
}

/**
 * 将传入的值除以10000之后返回保留一位小数的值，0不做处理
 * @param {*} oldValue
 * @returns
 */
export function getValueByTenThousandFixedOneIgnoreZero(oldValue) {
  const value = getValueByTenThousandFixedOneDecimalPlace(oldValue, true);
  return value;
}

/**
 * 将传入的值除以10000之后返回保留一位小数的值，0不做处理
 * @param {*} oldValue
 * @returns
 */
export function getValueByTenThousandFixedTwoIgnoreZero(oldValue) {
  const value = getValueByTenThousandFixedTwoDecimalPlace(oldValue, true);
  return value;
}
