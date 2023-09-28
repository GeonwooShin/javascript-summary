// const obj = {
//   name: "peter",
//   age: 19,
// };

// const obj2 = obj;

// Object.freeze(obj2);
// obj.name = "max";
// console.log(obj);

const obj = {
  a: 1,
  b: 2,
  c: {
    a: "c1",
    b: "c2",
  },
};

// const obj2 = Object.assign({}, obj);
const obj2 = { ...obj };

obj2.a = 21;
console.log(obj, obj2);

obj2.c.a = "123123";
console.log(obj, obj2);
