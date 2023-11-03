import pull from "../../lodash/pull";

describe("pull 함수 테스트", () => {
  test("함수 인자에 아무것도 전달하지 않은 경우 undefined를 반환한다.", () => {
    const result = pull();
    expect(result).toBe(undefined);
  });
  test("함수 인자에 배열이 아닌 값을 전달하면 해당 값을 반환한다.", () => {
    const result = pull(1, 2, 3, 4, 5);
    expect(result).toBe(1);
  });
  test("함수 인자에 배열과 제거할 값을 전달하면 전달한 값을 제외한 배열을 반환한다.", () => {
    const result = pull(["apple", "grape", "banana", "kiwi"], "kiwi", "grape");
    expect(result).toEqual(["apple", "banana"]);
  });
  test("함수 인자에 배열만을 전달할 경우 배열을 그대로 반환한다.", () => {
    const result = pull([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
