import sum from "../../js-practice/jestTest";

describe("첫 테스트", () => {
  it("a와 b 더하기", () => {
    let result = sum(1, 2);
    expect(result).toBe(3);
    result = sum(3, 4);
    expect(result).toBe(7);
  });
});
