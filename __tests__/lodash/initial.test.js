import initial from "../../lodash/initial";

describe("initial 함수 테스트", () => {
  test("인자로 아무것도 전달하지 않는 경우", () => {
    const result = initial();
    expect(result).toEqual([]);
  });
  test("인자로 배열을 전달하는 경우", () => {
    const result = initial([1, 2, 3]);
    expect(result).toEqual([1, 2]);
  });
  test("인자로 빈 배열을 전달하는 경우", () => {
    const result = initial([]);
    expect(result).toEqual([]);
  });
});
