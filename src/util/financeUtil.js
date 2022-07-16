import TenThousand from '../financeFunc/TenThousand';
import HundredMillion from '../financeFunc/HundredMillion';

/**
 * 将传入的值除以10000之后返回
 * @param {*} oldValue
 * @returns
 */
export function getValueByTenThousand(oldValue) {
  return TenThousand.getValueByTenThousand(oldValue);
}

/**
 * 将传入的值除以10000之后返回保留一位小数的字符串
 * @param {*} oldValue
 * @returns
 */
export function getStrByTenThousandFixedOneDecimalPlace(oldValue) {
  return TenThousand.getStrByTenThousandFixedOneDecimalPlace(oldValue);
}

/**
 * 将传入的值除以10000之后返回保留两位小数的字符串
 * @param {*} oldValue
 * @returns
 */
export function getStrByTenThousandFixedTwoDecimalPlace(oldValue) {
  return TenThousand.getStrByTenThousandFixedTwoDecimalPlace(oldValue);
}

/**
 * 将传入的值除以10000之后返回保留一位小数的值
 * @param {*} oldValue
 * @param {*} ignoreZero 是否忽略值为0的情况
 * @returns
 */
export function getValueByTenThousandFixedOneDecimalPlace(oldValue, ignoreZero) {
  return TenThousand.getValueByTenThousandFixedOneDecimalPlace(oldValue, ignoreZero);
}

/**
 * 将传入的值除以10000之后返回保留两位小数的值
 * @param {*} oldValue
 * @param {*} ignoreZero 是否忽略值为0的情况
 * @returns
 */
export function getValueByTenThousandFixedTwoDecimalPlace(oldValue, ignoreZero) {
  return TenThousand.getValueByTenThousandFixedTwoDecimalPlace(oldValue, ignoreZero);
}

/**
 * 将传入的值除以10000之后返回保留一位小数的值，0不做处理
 * @param {*} oldValue
 * @returns
 */
export function getValueByTenThousandFixedOneIgnoreZero(oldValue) {
  return TenThousand.getValueByTenThousandFixedOneIgnoreZero(oldValue);
}

/**
 * 将传入的值除以10000之后返回保留两位小数的值，0不做处理
 * @param {*} oldValue
 * @returns
 */
export function getValueByTenThousandFixedTwoIgnoreZero(oldValue) {
  return TenThousand.getValueByTenThousandFixedTwoIgnoreZero(oldValue);
}

/**
 * 将传入的值除以100000000之后返回
 * @param {*} oldValue
 * @returns
 */
export function getValueByHundredMillion(oldValue) {
  return HundredMillion.getValueByHundredMillion(oldValue);
}

/**
 * 将传入的值除以100000000之后返回保留一位小数的字符串
 * @param {*} oldValue
 * @returns
 */
export function getStrByHundredMillionFixedOneDecimalPlace(oldValue) {
  return HundredMillion.getStrByHundredMillionFixedOneDecimalPlace(oldValue);
}

/**
 * 将传入的值除以100000000之后返回保留两位小数的字符串
 * @param {*} oldValue
 * @returns
 */
export function getStrByHundredMillionFixedTwoDecimalPlace(oldValue) {
  return HundredMillion.getStrByHundredMillionFixedTwoDecimalPlace(oldValue);
}

/**
 * 将传入的值除以100000000之后返回保留一位小数的值
 * @param {*} oldValue
 * @param {*} ignoreZero 是否忽略值为0的情况
 * @returns
 */
export function getValueByHundredMillionFixedOneDecimalPlace(oldValue, ignoreZero) {
  return HundredMillion.getValueByHundredMillionFixedOneDecimalPlace(oldValue, ignoreZero);
}

/**
 * 将传入的值除以100000000之后返回保留两位小数的值
 * @param {*} oldValue
 * @param {*} ignoreZero 是否忽略值为0的情况
 * @returns
 */
export function getValueByHundredMillionFixedTwoDecimalPlace(oldValue, ignoreZero) {
  return HundredMillion.getValueByHundredMillionFixedTwoDecimalPlace(oldValue, ignoreZero);
}

/**
 * 将传入的值除以100000000之后返回保留一位小数的值，0不做处理
 * @param {*} oldValue
 * @returns
 */
export function getValueByHundredMillionFixedOneIgnoreZero(oldValue) {
  return HundredMillion.getValueByHundredMillionFixedOneIgnoreZero(oldValue);
}

/**
 * 将传入的值除以100000000之后返回保留两位小数的值，0不做处理
 * @param {*} oldValue
 * @returns
 */
export function getValueByHundredMillionFixedTwoIgnoreZero(oldValue) {
  return HundredMillion.getValueByHundredMillionFixedTwoIgnoreZero(oldValue);
}
