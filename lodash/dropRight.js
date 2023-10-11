export default function dropRight(arr, num) {
  const dropedArr = [];
  const count = num === 0 ? 0 : num ? num : 1;
  if (!arguments.length) return dropedArr;
  if (count > arr.length) return dropedArr;
  for (let i = 0; i < arr.length - count; i++) {
    dropedArr.push(arr[i]);
  }
  return dropedArr;
}
