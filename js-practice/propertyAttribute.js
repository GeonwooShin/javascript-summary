const person = {
  firstName: "youngsoo",
  lastName: "Lee",
  dataPropertyGet: function (name) {
    const [changedFirstName, changedLastName] = name.split(" ");
    [this.firstName, this.lastName] = [changedFirstName, changedLastName];
  },
  get fullName() {
    return `${this.firstNamename} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

console.log(Object.getOwnPropertyDescriptors(person));
console.log(person.__proto__);

console.log(person.firstName + " " + person.lastName);

person.fullName = "Geonwoo Shin";
console.log(person);

person.dataPropertyGet("Hansoo Kim");
console.log(person);

Object.defineProperty(person, "firstName", {
  value: "angonag",
  writable: true,
  enumerable: false,
  configurable: true,
});

console.log(Object.getOwnPropertyDescriptor(person, "firstName"));
/* 데이터 프로퍼티 firstName의 프로퍼티 어트리뷰트인 Enumerable의 값이
false 이므로 Object.keys나 for...in으로 열거가 불가능하다.*/
console.log(Object.keys(person));

// 객체 변경 방지방법

// 1. 프로퍼티 추가 금지
const car = {
  price: 5000,
  model: "tesla",
};

Object.preventExtensions(car);
console.log(Object.isExtensible(car));
car.color = "red";
delete car.model;
console.log(car);

// 2. 프로퍼티 추가, 삭제, 재정의 금지
const car2 = {
  price: 5000,
  model: "tesla",
};

Object.seal(car2);
console.log(Object.isSealed(car2));
car2.color = "red";
delete car2.model;
car2.price = 10000;
console.log(car2);

// 3. 프로퍼티 읽기만 가능
const car3 = {
  price: 5000,
  model: "tesla",
};

Object.freeze(car3);
console.log(Object.isFrozen(car3));
car3.model = "asd";
delete car3.price;
console.log(car3);
