import deepClone from "../../js-practice/deepclone";

test("deeply copies objects", () => {
  const obj = {
    num: 1,
    str: "string",
    arr: [1, 2, 3, { inner: "obj" }],
    obj: {
      key: "value",
    },
    date: new Date(),
    regex: /hello/g,
  };

  const copied = deepClone(obj);
  expect(copied).toEqual(obj); // 값은 동일해야 합니다.
  expect(copied).not.toBe(obj); // 하지만 참조는 다르게 됩니다.
  expect(copied.arr).not.toBe(obj.arr);
  expect(copied.arr[3]).not.toBe(obj.arr[3]);
  expect(copied.obj).not.toBe(obj.obj);
  expect(copied.date).not.toBe(obj.date);
  expect(copied.regex).not.toBe(obj.regex);
});
