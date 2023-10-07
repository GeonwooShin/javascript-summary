import difference from "../../lodash/difference";

describe("difference 함수 테스트", () => {
  test("함수 인자에 아무것도 전달하지 않는 경우", () => {
    const result = difference();
    expect(result).toEqual([]);
  });
  test("기준이 되는 배열과 이후에 오늘 배열들의 값들 중 중복되지 않는 값이 있는 경우", () => {
    const result = difference([2, 1], [2, 3]);
    expect(result).toEqual([1]);
  });
  test("기준이 되는 배열과 이후에 오늘 배열들의 값들 중 중복되지 않는 값이 있는 경우 2", () => {
    const result = difference([1, 2, 8], [1, 2, 3], [4, 5, 6, 7]);
    expect(result).toEqual([8]);
  });
  test("기준이 되는 배열과 이후에 오늘 배열들의 값들 중 배열이 아닌 값이 포함되는 경우", () => {
    const result = difference([1, 2, 8], [1, 2, 3], [4, 5, 6, 7], 8);
    expect(result).toEqual([8]);
  });
  test("기준이 되는 배열과 문자열이 주어지는 경우", () => {
    const result = difference([1, 2, 8], "128");
    expect(result).toEqual([1, 2, 8]);
  });
});
