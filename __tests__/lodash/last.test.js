import last from "../../lodash/last";

describe("last 함수 테스트", () => {
  test("함수 인자에 아무것도 전달하지 않은 경우 undefined를 반환한다.", () => {
    const result = last();
    expect(result).toBe(undefined);
  });
  test("함수 인자에 배열이 아닌 값을 전달하면 undefined를 반환한다.", () => {
    const result = last(1, 2, 3, 4, 5);
    expect(result).toBe(undefined);
  });
  test("함수 인자에 객체를 전달하면 undefined를 반환한다.", () => {
    const result = last({ name: "peter" });
    expect(result).toBe(undefined);
  });
  test("함수 인자에 배열을 전달하면 배열의 마지막 요소를 반환한다.", () => {
    const result = last([11, 22, 33, 44, 123]);
    expect(result).toBe(123);
  });
});
