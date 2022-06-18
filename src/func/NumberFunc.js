export default class NumberFunc {
  /**
   * 判断传入的值是否是NaN
   * @param {*} str
   * @returns
   */
  // eslint-disable-next-line class-methods-use-this
  isNaN(str) {
    if (Number.isNaN(str) || Number.isNaN(Number.parseInt(str, 10))) {
      return true;
    }
    return false;
  }
}
