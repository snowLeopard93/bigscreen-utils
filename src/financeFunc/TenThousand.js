/* eslint-disable no-console */
import FinanceFunc from '../func/FinanceFunc';

const TEN_THOUSAND = 10000;
export default class TenThousand extends FinanceFunc {
  /**
   * 将传入的值除以10000之后返回
   * @param {*} oldValue
   * @returns
   */
  static getValueByTenThousand(oldValue) {
    return this.getValueByDivide(oldValue, TEN_THOUSAND);
  }

  /**
   * 将传入的值除以10000之后返回保留一位小数的字符串
   * @param {*} oldValue
   * @returns
   */
  static getStrByTenThousandFixedOneDecimalPlace(oldValue) {
    return this.getStrByDivideFixedOneDecimalPlace(oldValue, TEN_THOUSAND);
  }

  /**
   * 将传入的值除以10000之后返回保留两位小数的字符串
   * @param {*} oldValue
   * @returns
   */
  static getStrByTenThousandFixedTwoDecimalPlace(oldValue) {
    return this.getStrByDivideFixedTwoDecimalPlace(oldValue, TEN_THOUSAND);
  }

  /**
   * 将传入的值除以10000之后返回保留一位小数的值
   * @param {*} oldValue
   * @param {*} ignoreZero 是否忽略值为0的情况
   * @returns
   */
  static getValueByTenThousandFixedOneDecimalPlace(oldValue, ignoreZero) {
    return this.getValueByDivideFixedOneDecimalPlace(oldValue, ignoreZero, TEN_THOUSAND);
  }

  /**
   * 将传入的值除以10000之后返回保留两位小数的值
   * @param {*} oldValue
   * @param {*} ignoreZero 是否忽略值为0的情况
   * @returns
   */
  static getValueByTenThousandFixedTwoDecimalPlace(oldValue, ignoreZero) {
    return this.getValueByDivideFixedTwoDecimalPlace(oldValue, ignoreZero, TEN_THOUSAND);
  }

  /**
   * 将传入的值除以10000之后返回保留一位小数的值，0不做处理
   * @param {*} oldValue
   * @returns
   */
  static getValueByTenThousandFixedOneIgnoreZero(oldValue) {
    return this.getValueByDivideFixedOneIgnoreZero(oldValue, true, TEN_THOUSAND);
  }

  /**
   * 将传入的值除以10000之后返回保留两位小数的值，0不做处理
   * @param {*} oldValue
   * @returns
   */
  static getValueByTenThousandFixedTwoIgnoreZero(oldValue) {
    return this.getValueByDivideFixedTwoIgnoreZero(oldValue, true, TEN_THOUSAND);
  }
}
