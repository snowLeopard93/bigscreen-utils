/* eslint-disable no-undef */
import * as timeUtil from '../src/util/timeUtil';

test('getTimeArray', () => {
  expect(timeUtil.getTimeArray('12:00:00', '2022-06-21 16:00:00', 'hours', 1, 'YYYY-MM-DD HH:00:00')).toEqual(
    [],
  );

  expect(timeUtil.getTimeArray('2022-06-21 12:00:00', '16:00:00', 'hours', 1, 'YYYY-MM-DD HH:00:00')).toEqual(
    [],
  );

  expect(timeUtil.getTimeArray('', '', 'hours', 1, 'YYYY-MM-DD HH:00:00')).toEqual(
    [],
  );

  expect(timeUtil.getTimeArray(null, undefined, 'hours', 1, 'YYYY-MM-DD HH:00:00')).toEqual(
    [],
  );

  expect(timeUtil.getTimeArray('2022-06-21 12:00:00', '2022-06-21 16:00:00')).toEqual(
    ['2022-06-21 12:00:00', '2022-06-21 13:00:00', '2022-06-21 14:00:00', '2022-06-21 15:00:00', '2022-06-21 16:00:00'],
  );

  expect(timeUtil.getTimeArray('2022-06-21 12:00:00', '2022-06-21 16:00:00', 'hours', 1, 'YYYY-MM-DD HH:00:00')).toEqual(
    ['2022-06-21 12:00:00', '2022-06-21 13:00:00', '2022-06-21 14:00:00', '2022-06-21 15:00:00', '2022-06-21 16:00:00'],
  );

  expect(timeUtil.getTimeArray('2022-06-21 12:00:00', '2022-06-21 17:00:00', 'hours', 2, 'YYYY-MM-DD HH:00:00')).toEqual(
    ['2022-06-21 12:00:00', '2022-06-21 14:00:00', '2022-06-21 16:00:00', '2022-06-21 17:00:00'],
  );

  expect(timeUtil.getTimeArray('2022-06-21 12:00:00', '2022-06-21 12:20:00', 'minutes', 5, 'YYYY-MM-DD HH:mm:00')).toEqual(
    ['2022-06-21 12:00:00', '2022-06-21 12:05:00', '2022-06-21 12:10:00', '2022-06-21 12:15:00', '2022-06-21 12:20:00'],
  );
});

test('getTimeArrayByHours', () => {
  expect(timeUtil.getTimeArrayByHours('2022-06-21 12:00:00', '2022-06-21 16:00:00')).toEqual(
    ['2022-06-21 12:00:00', '2022-06-21 13:00:00', '2022-06-21 14:00:00', '2022-06-21 15:00:00', '2022-06-21 16:00:00'],
  );
});
