import differenceBy from "../../lodash/differenceBy";

describe("differenceBy 함수 테스트", () => {
  test("함수 인자에 아무것도 전달되지 않는 경우", () => {
    const result = differenceBy();
    expect(result).toEqual([]);
  });
  test("기준이 되는 배열과 이후에 오는 배열들의 값들 중 중복되지 않는 값이 있는 경우", () => {
    const result = differenceBy([2, 1], [2, 3]);
    expect(result).toEqual([1]);
  });
  test("기준이 되는 배열과 인자로 넘겨준 함수가 실행된 배열들의 값들 중 중복되지 않는 값이 있는 경우", () => {
    const result = differenceBy([2.3, 1.2], [2.3, 3.4], Math.floor);
    expect(result).toEqual([1.2]);
  });
  test("기준이 되는 배열과 인자로 넘겨준 문자열이 주어진 객체의 키 값으로 작용하는 경우", () => {
    const result = differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x");
    expect(result).toEqual([{ x: 2 }]);
  });
});
