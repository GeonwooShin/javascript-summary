import fromPairs from "../../lodash/fromPairs";

describe("fromPairs 함수 테스트", () => {
  test("함수 인자에 아무것도 전달하지 않은 경우", () => {
    const result = fromPairs();
    expect(result).toEqual({});
  });
  test("함수 인자에 배열이 아닌 값이 전달된 경우", () => {
    const result = fromPairs(1, 2, 3);
    expect(result).toEqual({});
  });
  test("함수 인자에 키와 값의 배열이 잘 전달된 경우", () => {
    const result = fromPairs([
      ["x", 11],
      ["y", 23],
    ]);
    expect(result).toEqual({ x: 11, y: 23 });
  });
});
