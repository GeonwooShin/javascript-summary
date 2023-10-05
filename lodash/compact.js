// lodash_compact: falsy한 값을 제외한 배열 반환
export default function compact(arr) {
  let idx = -1;
  let arrIdx = 0;
  const compactedArr = [];
  const length = arr == null ? 0 : arr.length;
  while (++idx < length) {
    const value = arr[idx];
    if (value) {
      compactedArr[arrIdx++] = value;
    }
  }
  return compactedArr;
}

const arr = [1, 2, 3, 4, "", "123123", null, { name: "asd" }, undefined, 0];
const arr2 = "1234";
const result = compact(arr2);

console.log(result);
