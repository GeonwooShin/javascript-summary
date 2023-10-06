export default function concat() {
  const arrLength = arguments.length;
  if (!arrLength) {
    return [];
  }
  let concatArr = [];
  for (let arg of arguments) {
    if (Array.isArray(arg)) {
      for (let item of arg) {
        concatArr.push(item);
      }
    } else {
      concatArr.push(arg);
    }
  }
  return concatArr;
}

const a = concat(1);
console.log(a);
