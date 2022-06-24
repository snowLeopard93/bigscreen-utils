import NumberFunc from '../func/NumberFunc';

/**
 * 将字符串转换成整型
 * @param {*} str
 * @returns
 */
export function parseInt(str) {
  if (NumberFunc.isNaN(str)) {
    return 0;
  }
  return Number.parseInt(str, 10);
}

/**
 * 将字符串转换成浮点数
 * @param {*} str
 * @returns
 */
export function parseFloat(str) {
  if (NumberFunc.isNaN(str)) {
    return 0;
  }
  return NumberFunc.parseFloat(str);
}

/**
 * 返回保留小数点后指定位数的字符串
 * @param {*} str
 * @param {*} fixed
 * @returns
 */
export function parseFloatByFixed(str, fixed) {
  if (NumberFunc.isNaN(str)) {
    return '';
  }
  return NumberFunc.parseFloat(str).toFixed(fixed);
}

/**
 * 加千分位分隔符
 * @param {*} str
 * @returns
 */
export function toLocaleString(str) {
  if (NumberFunc.isNaN(str)) {
    return '';
  }
  return NumberFunc.parseFloat(str).toLocaleString('en-US');
}

/**
 * 返回保留小数点后一位的字符串
 * @param {*} str
 * @returns
 */
export function parseFloatByFixedOneDecimalPlace(str) {
  return parseFloatByFixed(str, 1);
}

/**
 * 返回保留小数点后两位的字符串
 * @param {*} str
 * @returns
 */
export function parseFloatByFixedTwoDecimalPlace(str) {
  return parseFloatByFixed(str, 2);
}

/**
 * 返回百分比数值字符串
 * @param {*} str
 * @param {*} fixed
 * @returns
 */
export function getPercentNumber(str, fixed) {
  const number = parseFloat(str);
  return (number * 100).toFixed(fixed);
}

/**
 * 返回百分比数值字符串（默认值）
 * @param {*} str
 * @param {*} fixed
 * @param {*} defaultValue
 * @returns
 */
export function getPercentNumberByDefaultValue(str, fixed, defaultValue) {
  let number = parseFloat(str);
  if (number === 0) {
    number = defaultValue;
  }
  return (number * 100).toFixed(fixed);
}

/**
 * 返回百分比数值字符串（默认字符串）
 * @param {*} str
 * @param {*} fixed
 * @param {*} defaultStr
 * @returns
 */
export function getPercentNumberByDefaultStr(str, fixed, defaultStr) {
  const number = parseFloat(str);
  if (number === 0) {
    return defaultStr;
  }
  return (number * 100).toFixed(fixed);
}
