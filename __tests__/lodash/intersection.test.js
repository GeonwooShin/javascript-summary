import intersection from "../../lodash/intersection";

describe("intersection 함수 테스트", () => {
  test("함수 인자에 아무것도 전달하지 않은 경우", () => {
    const result = intersection();
    expect(result).toEqual([]);
  });
  test("함수 인자에 타겟 배열이 주어지지 않은 경우", () => {
    const result = intersection([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });
  test("함수 인자에 배열과 타겟 배열이 모두 알맞게 주어진 경우", () => {
    const result = intersection([11, 2, 34, 4], [1, 2, 3, 4, 5]);
    expect(result).toEqual([2, 4]);
  });
  test("함수의 첫번째 인자에 배열이 아닌 값이 주어진 경우", () => {
    const result = intersection("hi!", [1, 2, 3, 4, 5]);
    expect(result).toEqual([]);
  });
});
