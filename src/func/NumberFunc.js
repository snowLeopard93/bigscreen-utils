export default class NumberFunc {
  /**
   * 判断传入的值是否是NaN
   * @param {*} str
   * @returns
   */
  static isNaN(str) {
    if (Number.isNaN(str) || Number.isNaN(Number.parseInt(str, 10))) {
      return true;
    }
    return false;
  }

  /**
   * 将字符串转换成数值
   * @param {*} str
   * @returns
   */
  static parseFloat(str) {
    return Number.parseFloat(str);
  }
}
