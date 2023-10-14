export default function indexOf(arr, value, startIdx) {
  if (!arr || !value) return -1;
  const start = startIdx ? startIdx : 0;
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}
