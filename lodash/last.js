export default function last(arr) {
  if (!arr || !Array.isArray(arr)) return undefined;
  return arr[arr.length - 1];
}
