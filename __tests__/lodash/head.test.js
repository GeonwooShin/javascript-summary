import head from "../../lodash/head";

describe("head 함수 테스트", () => {
  test("배열을 전달 하는 경우", () => {
    const result = head([1, 2, 3, 4, 5, 6, 7]);
    expect(result).toEqual(1);
  });
  test("인자로 아무것도 전달하지않는 경우", () => {
    const result = head();
    expect(result).toEqual(undefined);
  });
  test("인자로 빈 배열을 전달하는 경우", () => {
    const result = head([]);
    expect(result).toEqual(undefined);
  });
});
