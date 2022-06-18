/**
 * 字符串前面补0
 * @param {*} num
 * @param {*} length
 * @returns
 */
export function addLeftZero(num, length) {
  const numStr = num.toString();
  return numStr.padStart(length, '0');
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
