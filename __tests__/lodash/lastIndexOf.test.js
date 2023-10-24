import lastIndexOf from "../../lodash/lastIndexOf";

describe("lastIndexOf 함수 테스트", () => {
  test("인자로 아무것도 전달하지 않는 경우 결과값은 -1", () => {
    const result = lastIndexOf();
    expect(result).toEqual(-1);
  });
  test("인자로 배열만 전달하는 경우 배열의 결과값은 배열의 길이", () => {
    const result = lastIndexOf([1, 2, 3, 4, 5, 6, 7]);
    expect(result).toEqual(7);
  });
  test("인자로 배열과 값을 전달하는 경우 마지막 결과값의 인덱스 반환", () => {
    const result = lastIndexOf([1, 2, 3, 4, 5, 6, 7], 3);
    expect(result).toEqual(2);
  });
  test("추가로 fromIndex를 전달하는 경우 해당 크기만큼 배열을 잘라 수행", () => {
    const result = lastIndexOf([1, 2, 3, 4, 5, 6, 7, 3], 3, 5);
    expect(result).toEqual(2);
  });
});
