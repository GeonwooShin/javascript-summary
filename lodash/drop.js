export default function drop(arr, num) {
  const dropedArr = [];
  const count = num === 0 ? 0 : num ? num : 1;
  if (!arguments.length) return dropedArr;
  if (count > arr.length) return dropedArr;
  for (let i = count; i < arr.length; i++) {
    dropedArr.push(arr[i]);
  }
  return dropedArr;
}
