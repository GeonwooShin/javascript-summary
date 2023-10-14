import indexOf from "../../lodash/indexOf";

describe("indexOf 함수 테스트", () => {
  test("인자로 아무것도 전달하지 않는 경우", () => {
    const result = indexOf();
    expect(result).toBe(-1);
  });
  test("인자로 배열만 전달하는 경우", () => {
    const result = indexOf([1, 2, 3]);
    expect(result).toBe(-1);
  });
  test("인자로 배열과 찾는 값을 전달하는 경우", () => {
    const result = indexOf([1, 2, 3, 4], 3);
    expect(result).toBe(2);
  });
  test("찾는 값이 배열에 존재하지 않는 경우", () => {
    const result = indexOf([1, 2, 3, 4], 5);
    expect(result).toBe(-1);
  });
  test("시작할 인덱스를 전달하는 경우", () => {
    const result = indexOf([1, 2, 3, 4, 3, 5], 3, 3);
    expect(result).toBe(4);
  });
});
