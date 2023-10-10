import drop from "../../lodash/drop";

describe("drop 함수 테스트", () => {
  test("함수 인자에 아무것도 전달되지 않은 경우", () => {
    const result = drop();
    expect(result).toEqual([]);
  });
  test("함수 인자에 배열만 전달된 경우", () => {
    const result = drop([1, 2, 3, 4, 5]);
    expect(result).toEqual([2, 3, 4, 5]);
  });
  test("함수 인자에 배열과 drop 할 숫자가 전달된 경우", () => {
    const result = drop([1, 2, 3, 4, 5], 4);
    expect(result).toEqual([5]);
  });
  test("함수 인자에 배열과 0이 전달된 경우", () => {
    const result = drop([1, 2, 3, 4, 5], 0);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
