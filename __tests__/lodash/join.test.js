import join from "../../lodash/join";

describe("join 함수 테스트", () => {
  test("인자로 아무것도 전달하지 않는 경우", () => {
    const result = join();
    expect(result).toBe("");
  });
  test("인자로 배열만 전달하는 경우", () => {
    const result = join(["a", "b", "c"]);
    expect(result).toBe("a,b,c");
  });
  test("인자로 배열과 사이에 들어갈 값을 전달하는 경우", () => {
    const result = join(["a", "b", "c"], "~");
    expect(result).toBe("a~b~c");
  });
  test("인자로 배열과 사이에 들어갈 값을 배열로 전달하는 경우", () => {
    const result = join(["a", "b", "c"], ["1", "2", "3"]);
    expect(result).toBe("a1,2,3b1,2,3c");
  });
});
