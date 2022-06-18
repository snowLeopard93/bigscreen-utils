import NumberFunc from '../func/NumberFunc';

const numberFunc = new NumberFunc();

/**
 * 将字符串转换成整型
 * @param {*} str
 * @returns
 */
export function parseInt(str) {
  if (numberFunc.isNaN(str)) {
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
  if (numberFunc.isNaN(str)) {
    return 0;
  }
  return Number.parseFloat(str);
}

/**
 * 返回保留小数点后指定位数的字符串
 * @param {*} str
 * @param {*} fixed
 * @returns
 */
export function parseFloatByFixed(str, fixed) {
  if (numberFunc.isNaN(str)) {
    return '';
  }
  return Number.parseFloat(str).toFixed(fixed);
}
