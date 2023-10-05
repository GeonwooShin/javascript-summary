import compact from "../../lodash/compact";

describe("compact 함수 테스트", () => {
  test("함수 인자에 falsy한 값이 들어가는 경우", () => {
    const result = compact([undefined, null, 0, "", NaN]);
    expect(result).toEqual([]);
  });
  test("함수 인자에 truthy한 값과 falsy한 값이 같이 들어가는 경우", () => {
    const result = compact(["asd", undefined, 0, 1, 2, 3, { name: "peter" }]);
    expect(result).toEqual(["asd", 1, 2, 3, { name: "peter" }]);
  });
  test("함수 인자에 배열이 아닌 문자열이 들어가는 경우", () => {
    const result = compact("qweasd");
    expect(result).toEqual(["q", "w", "e", "a", "s", "d"]);
  });
  test("함수 인자에 숫자가 들어가는 경우", () => {
    const result = compact(123123);
    expect(result).toEqual([]);
  });
});
