/**
 * 字符串转换成浮点数
 * @param {*} str
 */
export function parseFloat(str) {
    if (Number.isNaN(str) || Number.isNaN(Number.parseFloat(str))) {
        return 0;
    } else {
        return Number.parseFloat(str);
    }
}

/**
 * 字符串转换成整数
 * @param {*} str
 * @returns
 */
export function parseInt(str) {
    if (Number.isNaN(str) || Number.isNaN(Number.parseInt(str))) {
        return 0;
    } else {
        return Number.parseInt(str);
    }
}

/**
 * 字符串前面补0
 * @param {*} num
 * @param {*} maxLength
 */
export function addLeftZero(num, maxLength) {
    let numStr = num.toString();
    return numStr.padStart(maxLength, "0");
}

/**
 * 数组等分
 * @param {*} array
 * @param {*} subGroupLength
 */
export function equallyDivide(array, subGroupLength) {
    let index = 0;
    let newArray = [];
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
    } else {
        return false;
    }
}

/**
 * 判断值是否是null或undefined或空字符串
 * @param {*} value
 * @returns
 */
export function isNullOrUndefinedOrEmptyString(value) {
    if (value === null || value === undefined || value === "") {
        return true;
    } else {
        return false;
    }
}