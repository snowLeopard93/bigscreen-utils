import FinanceFunc from '../func/FinanceFunc';

const HUANDRED_MILLION = 100000000;
export default class HundredMillion extends FinanceFunc {
  /**
   * 将传入的值除以100000000之后返回
   * @param {*} oldValue
   * @returns
   */
  static getValueByHundredMillion(oldValue) {
    return this.getValueByDivide(oldValue, HUANDRED_MILLION);
  }

  /**
   * 将传入的值除以100000000之后返回保留一位小数的字符串
   * @param {*} oldValue
   * @returns
   */
  static getStrByHundredMillionFixedOneDecimalPlace(oldValue) {
    return this.getStrByDivideFixedOneDecimalPlace(oldValue, HUANDRED_MILLION);
  }

  /**
   * 将传入的值除以100000000之后返回保留两位小数的字符串
   * @param {*} oldValue
   * @returns
   */
  static getStrByHundredMillionFixedTwoDecimalPlace(oldValue) {
    return this.getStrByDivideFixedTwoDecimalPlace(oldValue, HUANDRED_MILLION);
  }

  /**
   * 将传入的值除以100000000之后返回保留一位小数的值
   * @param {*} oldValue
   * @param {*} ignoreZero 是否忽略值为0的情况
   * @returns
   */
  static getValueByHundredMillionFixedOneDecimalPlace(oldValue, ignoreZero) {
    return this.getValueByDivideFixedOneDecimalPlace(oldValue, ignoreZero, HUANDRED_MILLION);
  }

  /**
   * 将传入的值除以100000000之后返回保留两位小数的值
   * @param {*} oldValue
   * @param {*} ignoreZero 是否忽略值为0的情况
   * @returns
   */
  static getValueByHundredMillionFixedTwoDecimalPlace(oldValue, ignoreZero) {
    return this.getValueByDivideFixedTwoDecimalPlace(oldValue, ignoreZero, HUANDRED_MILLION);
  }

  /**
   * 将传入的值除以100000000之后返回保留一位小数的值，0不做处理
   * @param {*} oldValue
   * @returns
   */
  static getValueByHundredMillionFixedOneIgnoreZero(oldValue) {
    return this.getValueByDivideFixedOneIgnoreZero(oldValue, true, HUANDRED_MILLION);
  }

  /**
   * 将传入的值除以100000000之后返回保留两位小数的值，0不做处理
   * @param {*} oldValue
   * @returns
   */
  static getValueByHundredMillionFixedTwoIgnoreZero(oldValue) {
    return this.getValueByDivideFixedTwoIgnoreZero(oldValue, true, HUANDRED_MILLION);
  }
}
