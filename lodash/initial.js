export default function initial(arr) {
  const result = [];
  if (!arr || arr.length === 1) return result;
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i]);
  }
  return result;
}
