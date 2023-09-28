// const obj = {
//   name: "peter",
//   age: 22,
// };

// const obj2 = Object.assign({}, obj);
// console.log(obj, obj2);

// obj2.name = "max";
// console.log(obj, obj2);

// const obj3 = { ...obj };
// console.log(obj, obj3);

// obj3.name = "jacob";
// console.log(obj, obj3);

// const shallowObj = {
//   name: "peter",
//   age: 22,
//   favorite: {
//     fruit: "apple",
//     animal: "dog",
//   },
// };

// const shallowObj2 = Object.assign({}, shallowObj);
// shallowObj2.name = "max";
// shallowObj2.favorite.animal = "cat";

// console.log(shallowObj);
// console.log(shallowObj2);

const arr = ["dog", "cat", "monkey", ["whale", "fish"]];
const arr2 = [...arr];

console.log(arr);
console.log(arr2);

arr2[0] = "cheetah";
arr2[3][0] = "shark";

console.log(arr);
console.log(arr2);

const concatArr = ["dog", "cat", "monkey", ["whale", "fish"]];
const concatArr2 = concatArr.concat();

console.log(concatArr);
console.log(concatArr2);

concatArr2[0] = "cheetah";
concatArr2[3][0] = "shark";

// console.log(concatArr);
// console.log(concatArr2);

/* 객체와 배열의 복사본을 만든다는 점에서 얕은 복사와 깊은 복사는 공통점이 존재하지만
Object.assign과 전개연산자 또는 concat 메서드와 전개연산자를 통한 복사는 배열내부와 객체 내부의 중첩된
배열과 객체를 참조로 복사하기 때문에 중첩된 객체나 배열의 값을 변경하는 경우 원본과 복사본의 값이 모두 변경된다.

따라서 복사본을 만들때 중첩된 배열이나 객체의 원본 참조를 끊기 위해서는 깊은 복사를 사용해야 한다.
*/
const person = {
  name: "peter",
  age: 15,
  address: {
    nation: "korea",
    city: "seoul",
  },
};

const person2 = deepClone(person);
console.log(person2);

// 깊은 복사 완료
person.address.nation = "england";
console.log(person);
console.log(person2);

console.log(person.address === person2.address); // false => 복사본의 중첩된 객체가 원본 참조와 끊어짐

const fruitWithColor = [
  ["apple", "strawberry", "cherry"],
  "kiwi",
  "grape",
  ["banana", "mango"],
];
const fruitWithColor2 = deepClone(fruitWithColor);
console.log(fruitWithColor2);

fruitWithColor[0][0] = "peach";
console.log(fruitWithColor);
console.log(fruitWithColor2);

console.log(fruitWithColor[0] === fruitWithColor2[0]);

function deepClone(obj) {
  if (Array.isArray(obj)) {
    const cloneArr = [];
    for (let item of obj) {
      cloneArr.push(deepClone(item));
    }
    return cloneArr;
  } else if (obj instanceof Date) {
    return new Date(obj);
  } else if (obj instanceof RegExp) {
    return new RegExp(obj);
  } else if (typeof obj === "object" && obj !== null) {
    const cloneObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloneObj[key] = deepClone(obj[key]);
      }
    }
    return cloneObj;
  } else return obj;
}

const obj = {
  num: 1,
  str: "string",
  arr: [1, 2, 3, { inner: "obj" }],
  obj: {
    key: "value",
  },
  date: new Date(),
  regex: /hello/g,
};

const copied = deepClone(obj);
console.log(copied);

module.exports = { deepClone };
