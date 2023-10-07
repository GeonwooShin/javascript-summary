export default function difference() {
  const differenceArr = [];
  if (!arguments.length) return differenceArr;
  const inspectedArr = arguments[0];
  const defaultArr = new Set();
  for (let i = 1; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      for (let j = 0; j < arguments[i].length; j++) {
        defaultArr.add(arguments[i][j]);
      }
    }
  }
  for (let value of inspectedArr) {
    if (!defaultArr.has(value)) differenceArr.push(value);
  }
  return differenceArr;
}
