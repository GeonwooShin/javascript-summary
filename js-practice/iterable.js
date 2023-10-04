const fibonacci = function (max) {
  let [pre, cur] = [0, 1];
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      [pre, cur] = [cur, pre + cur];
      return {
        value: cur,
        done: cur >= max,
      };
    },
  };
};

for (const num of fibonacci(20)) {
  console.log(num); // 1 2 3 5 8 13
}
