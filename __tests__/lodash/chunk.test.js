import chunk from "../../lodash/chunk";

describe("chunk 함수 테스트", () => {
  test("배열과 배열의 길이보다 작은 사이즈를 전달하는 경우", () => {
    const arr = chunk([1, 2, 3, 4, 5, 6, 7], 3);
    expect(arr).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });
  test("배열과 배열의 길이보다 크거나 같은 사이즈를 전달하는 경우", () => {
    const arr = chunk([1, 2, 3], 5);
    expect(arr).toEqual([[1, 2, 3]]);
  });
  test("문자열과 문자열의 길이보다 작은 사이즈를 전달하는 경우", () => {
    const arr = chunk("chunkJestTest", 4);
    expect(arr).toEqual(["chun", "kJes", "tTes", "t"]);
  });
  test("문자열과 문자열의 길이보다 크거나 같은 사이즈를 전달하는 경우", () => {
    const arr = chunk("chunkJestTest", 30);
    expect(arr).toEqual(["chunkJestTest"]);
  });
  test("문자열 또는 배열이 아닌 인자가 전달된 경우", () => {
    const arr = chunk(123123123123, 3);
    expect(arr).toEqual([]);
  });
  test("문자열 또는 배열이 아닌 인자가 전달된 경우2", () => {
    const arr = chunk(/asd/g, 3);
    expect(arr).toEqual([]);
  });
});
