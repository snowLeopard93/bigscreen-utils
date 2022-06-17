/**
 * 字符串转换成浮点数
 * @param {*} str
 */
export function parseFloat(str) {
  if (Number.isNaN(str) || Number.isNaN(Number.parseFloat(str))) {
    return 0;
  }
  return Number.parseFloat(str);
}

/**
 * 字符串转换成整数
 * @param {*} str
 * @returns
 */
export function parseInt(str) {
  if (Number.isNaN(str) || Number.isNaN(Number.parseInt(str, 10))) {
    return 0;
  }
  return Number.parseInt(str, 10);
}

/**
 * 字符串前面补0
 * @param {*} num
 * @param {*} maxLength
 */
export function addLeftZero(num, maxLength) {
  const numStr = num.toString();
  return numStr.padStart(maxLength, '0');
}

/**
 * 数组等分
 * @param {*} array
 * @param {*} subGroupLength
 */
export function equallyDivide(array, subGroupLength) {
  let index = 0;
  const newArray = [];
  while (index < array.length) {
    newArray.push(array.slice(index, (index += subGroupLength)));
  }
  return newArray;
}

/**
 * 判断值是否是null或undefined
 * @param {*} value
 * @returns
 */
export function isNullOrUndefined(value) {
  if (value === null || value === undefined) {
    return true;
  }
  return false;
}

/**
 * 判断值是否是null或undefined或空字符串
 * @param {*} value
 * @returns
 */
export function isNullOrUndefinedOrEmptyString(value) {
  if (value === null || value === undefined || value === '') {
    return true;
  }
  return false;
}

/**
 * 判断是否是JSON字符串
 * @param {*} str
 * @returns
 */
export function isJSONStr(str) {
  if (typeof str === 'string') {
    try {
      const obj = JSON.parse(str);
      if (typeof obj === 'object' && obj) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  } else {
    return false;
  }
}

/**
 * 保留指定位数
 * @param {*} str
 * @param {*} fixed
 */
export function parseFloatByFixed(str, fixed) {
  if (Number.isNaN(str) || Number.isNaN(Number.parseFloat(str))) {
    return '';
  }
  return Number.parseFloat(str).toFixed(fixed);
}
