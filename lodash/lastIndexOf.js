export default function lastIndexOf(arr, value, fromIndex) {
  if (!arr || !Array.isArray(arr)) return -1;
  let fromArr;
  if (fromIndex === 0) {
    fromArr = arr.slice(0, 1);
  } else if (fromIndex) {
    fromArr = arr.slice(0, fromIndex + 1);
  } else {
    fromArr = arr;
  }
  if (value) {
    for (let i = fromArr.length; i >= 0; i--) {
      if (fromArr[i] === value) return i;
    }
  } else return arr.length;
  return -1;
}
