export default function fromPairs(arr) {
  const pairObj = {};
  if (!arr) return pairObj;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const [key, value] = arr[i];
      pairObj[key] = value;
    }
  }
  return pairObj;
}
