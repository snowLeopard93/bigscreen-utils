/* eslint-disable no-console */
import TimeFunc from '../func/TimeFunc';

/**
 * 传入开始时间、结束时间返回一个时间数组
 * @param {*} startTimeStr
 * @param {*} endTimeStr
 * @param {*} type
 * @param {*} interval
 * @param {*} formatStr
 * @returns
 */
export function getTimeArray(startTimeStr, endTimeStr, type, interval, formatStr) {
  if (TimeFunc.validDate(startTimeStr) && TimeFunc.validDate(endTimeStr)) {
    return TimeFunc.getTimeArray(startTimeStr, endTimeStr, type, interval, formatStr);
  }
  return [];
}

/**
 * 传入开始时间、结束时间返回一个时间数组，时间间隔为1小时
 * @param {*} startTimeStr
 * @param {*} endTimeStr
 */
export function getTimeArrayByHours(startTimeStr, endTimeStr) {
  return getTimeArray(startTimeStr, endTimeStr, 'hours', 1, 'YYYY-MM-DD HH:00:00');
}
