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
