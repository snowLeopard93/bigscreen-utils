import moment from 'moment';

export default class TimeFunc {
  static getTimeArray(startTimeStr, endTimeStr, type = 'hours', interval = 1, formatStr = 'YYYY-MM-DD HH:00:00') {
    const timeArray = [];
    const startTime = moment(startTimeStr);
    const endTime = moment(endTimeStr);
    const diffValue = endTime.diff(startTime, type);
    timeArray.push(startTime.format(formatStr));
    if (diffValue >= 1) {
      for (let i = interval; i < diffValue; i += interval) {
        const time = moment(startTimeStr)
          .add(i, type)
          .format(formatStr);
        timeArray.push(time);
      }
      timeArray.push(endTime.format(formatStr));
    }
    return timeArray;
  }

  static validDate(timeStr) {
    // 2022-06-21 12:00:00
    return /^\d{4}-\d{2}-\d{2}([ ])([0-1]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/.test(timeStr);
  }
}
