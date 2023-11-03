export default function pull(arr, ...values) {
  console.log(values);
  if (!arr) return undefined;
  if (!Array.isArray(arr)) return arr;
  return arr.filter((v) => !values.includes(v));
}
