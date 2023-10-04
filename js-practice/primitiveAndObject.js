const arr = [1, 2, 3];
console.log(arr);
arr[0] = 20;
console.log(arr);

const str = "12345";
console.log(str);
str[0] = "S"; // 문자열은 유사 배열이지만, 원시 값이기 때문에 변경할 수 없다.
// 하지만 변수에 새로운 원시값을 할당하는 것은 가능하다. 이는 원시값인 기존 문자열이 변경되는 것이 아니라 새로운 문자열을 할당하는 것 뿐이다.
console.log(str);

let score = 80;
let copy = score;

score = 100;

console.log(score, copy);

let arr2 = [1, 2, 3];
let arr3 = arr2;

console.log(arr2 === arr3);

const obj = {
  name: "kim",
  age: 22,
};

const copyObj = obj;

obj.name = "Lee";

console.log(obj, copyObj);
