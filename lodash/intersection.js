export default function intersection(arr1, arr2) {
  if (!Array.isArray(arr1)) return [];
  if (!arr2) return arr1;
  const set = new Set();
  const targetSet = new Set(arr2);
  for (let i = 0; i < arr1.length; i++) {
    if (targetSet.has(arr1[i])) set.add(arr1[i]);
  }
  return [...set];
}
