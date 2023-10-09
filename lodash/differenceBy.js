export default function differenceBy(arr1, arr2, iteratee) {
  if (!arguments.length) return [];
  if (typeof iteratee === "function") {
    const set = new Set(arr2.map(iteratee));
    return arr1.filter((element) => !set.has(iteratee(element)));
  } else if (typeof iteratee === "string") {
    const set = new Set(arr2.map((element) => element[iteratee]));
    return arr1.filter((element) => !set.has(element[iteratee]));
  } else {
    const set = new Set(arr2);
    return arr1.filter((element) => !set.has(element));
  }
}

const a = differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], Math.floor);
console.log(a);
