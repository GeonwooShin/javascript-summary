export default function nth(arr, idx) {
  if (!arr) return undefined;
  if (!idx) return arr[0];
  return idx < 0 ? arr[idx + arr.length] : arr[idx];
}
