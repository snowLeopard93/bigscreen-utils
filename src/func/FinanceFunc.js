import {
  parseFloat,
  parseFloatByFixedOneDecimalPlace,
  parseFloatByFixedTwoDecimalPlace,
} from '../util/numberUtil';

export default class FinanceFunc {
  static getValueByDivide(oldValue, divisor) {
    const value = parseFloat(oldValue / divisor);
    return value;
  }

  static getStrByDivideFixedOneDecimalPlace(oldValue, divisor) {
    const value = this.getValueByDivide(oldValue, divisor);
    const str = parseFloatByFixedOneDecimalPlace(value);
    return str;
  }

  static getStrByDivideFixedTwoDecimalPlace(oldValue, divisor) {
    const value = this.getValueByDivide(oldValue, divisor);
    const str = parseFloatByFixedTwoDecimalPlace(value);
    return str;
  }

  static getValueByDivideFixedOneDecimalPlace(oldValue, ignoreZero, divisor) {
    const value = this.getValueByDivide(oldValue, divisor);
    if (ignoreZero && value === 0) {
      return value;
    }
    const str = parseFloatByFixedOneDecimalPlace(value);
    const newValue = parseFloat(str);
    return newValue;
  }

  static getValueByDivideFixedTwoDecimalPlace(oldValue, ignoreZero, divisor) {
    const value = this.getValueByDivide(oldValue, divisor);
    if (ignoreZero && value === 0) {
      return value;
    }
    const str = parseFloatByFixedTwoDecimalPlace(value);
    const newValue = parseFloat(str);
    return newValue;
  }

  static getValueByDivideFixedOneIgnoreZero(oldValue, divisor) {
    const value = this.getValueByDivideFixedOneDecimalPlace(oldValue, true, divisor);
    return value;
  }

  static getValueByDivideFixedTwoIgnoreZero(oldValue, divisor) {
    const value = this.getValueByDivideFixedTwoDecimalPlace(oldValue, true, divisor);
    return value;
  }
}
