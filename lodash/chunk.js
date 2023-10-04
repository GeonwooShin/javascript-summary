export default function chunk(arr, size) {
  const chunkedArr = [];
  if (size >= arr.length) {
    chunkedArr.push(arr);
    return chunkedArr;
  } else {
    let index = 0;
    while (index < arr.length) {
      chunkedArr.push(arr.slice(index, index + size));
      index += size;
    }
    return chunkedArr;
  }
}

const a = chunk("chunkJestTest", 4);
console.log(a);
