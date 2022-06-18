/**
 * 数组等分
 * @param {*} array
 * @param {*} subGroupLength
 * @returns
 */
// eslint-disable-next-line import/prefer-default-export
export function equallyDivide(array, subGroupLength) {
  let index = 0;
  const newArray = [];
  while (index < array.length) {
    newArray.push(array.slice(index, (index += subGroupLength)));
  }
  return newArray;
}
