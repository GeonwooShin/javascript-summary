import nth from "../../lodash/nth";

describe("nth 함수 테스트", () => {
  test("함수 인자에 아무것도 전달하지 않은 경우 undefined를 반환한다.", () => {
    const result = nth();
    expect(result).toBe(undefined);
  });
  test("함수 인자에 배열이 아닌 값을 전달하면 undefined를 반환한다.", () => {
    const result = nth(1, 2, 3, 4, 5);
    expect(result).toBe(undefined);
  });
  test("함수 인자에 배열만을 전달하면 배열의 첫번째 요소를 반환한다.", () => {
    const result = nth(["a", "b", "c", "d", "e"]);
    expect(result).toBe("a");
  });
  test("함수 인자에 배열과 인덱스 번호를 전달하면 해당 인덱스의 요소를 반환한다.", () => {
    const result = nth(["a", "b", "c", "d", "e"], 3);
    expect(result).toBe("d");
  });
  test("함수 인자에 배열과 음수로 된 인덱스 번호를 전달하면 뒤에서 부터 해당 인덱스의 요소를 반환한다.", () => {
    const result = nth(["a", "b", "c", "d", "e"], -1);
    expect(result).toBe("e");
  });
  test("함수 인자에 배열과 배열의 크기와 맞지않는 인덱스 번호를 전달하면 undefined를 반환한다.", () => {
    const result = nth(["a", "b", "c", "d", "e"], -10);
    expect(result).toBe(undefined);
  });
});
