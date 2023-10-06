import concat from "../../lodash/concat";

describe("concat 함수 테스트", () => {
  test("함수 인자에 아무것도 전달하지 않는 경우", () => {
    const result = concat();
    expect(result).toEqual([]);
  });
  test("함수 인자에 배열이 아닌 숫자를 전달하는 경우", () => {
    const result = concat(1, 2, 3);
    expect(result).toEqual([1, 2, 3]);
  });
  test("함수 인자에 배열이 아닌 문자열을 전달하는 경우", () => {
    const result = concat("asdasd");
    expect(result).toEqual(["asdasd"]);
  });
  test("함수 인자에 여러 배열을 전달하는 경우", () => {
    const result = concat([1, 2, 3, 4], [5, 6, 7, 8], [9, 10]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test("함수 인자에 중첩 배열을 전달하는 경우", () => {
    const result = concat([1, 2, 3], [[[4], 5]]);
    expect(result).toEqual([1, 2, 3, [[4], 5]]);
  });
});
