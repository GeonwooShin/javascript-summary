import fill from "../../lodash/fill";

describe("fill 함수 테스트", () => {
  test("인자로 아무것도 전달하지 않는 경우", () => {
    const result = fill();
    expect(result).toEqual([]);
  });
  test("인자로 배열만 전달하는 경우", () => {
    const result = fill([1, 2, 3]);
    expect(result).toEqual([undefined, undefined, undefined]);
  });
  test("인자로 배열과 값을 전달하는 경우", () => {
    const result = fill([1, 2, 3], 30);
    expect(result).toEqual([30, 30, 30]);
  });
  test("인자로 배열과 값을 전달하고 시작점과 끝점또한 전달하는 경우", () => {
    const result = fill([1, 2, 3, 4, 5], "changed", 1, 4);
    expect(result).toEqual([1, "changed", "changed", "changed", 5]);
  });
});
