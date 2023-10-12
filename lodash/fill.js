export default function fill(array, value, startIdx, endIdx) {
  const filledArray = array ? array : [];
  const start = startIdx ? startIdx : 0;
  const end = endIdx ? endIdx : array ? array.length : 0;
  for (let i = start; i < end; i++) {
    filledArray[i] = value;
  }
  return filledArray;
}
