export default function join(arr, separator) {
  let joinedStr = "";
  if (!arr) return joinedStr;
  if (!separator) {
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        joinedStr += arr[i];
      } else {
        joinedStr += arr[i] + ",";
      }
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        joinedStr += arr[i];
      } else {
        joinedStr += arr[i] + separator;
      }
    }
  }
  return joinedStr;
}
