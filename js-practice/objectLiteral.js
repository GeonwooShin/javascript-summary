const prefix = "prop";
let i = 0;

const obj = {};

for (let i = 1; i <= 10; i++) {
  obj[`${prefix}-${i}`] = i;
}

console.log(obj);
console.log(obj["prop-4"]);

const obj2 = {
  name: "Lee",
  sayHi: function () {
    console.log(`Hi ${this.name}`);
  },
  // 메서드 정의시 축약표현, 일반적 메서드 정의와 차이가 존재
  // 메서드 축약표현을 메서드로 인정
  // ES5에서 메서드를 표현하는 방법인 프로퍼티의 값으로 함수 선언식을 할당하는 경우는 현재 ECMAScript 사양에서는 일반 함수로 정의
  sayBye() {
    console.log(`Bye ${this.name}`);
  },
};

const a = new obj2.sayHi(); // 일반 함수이기 때문에 new로 인스턴스 생성가능
console.log(a);

// const b = new obj2.sayBye();
// console.log(b);

obj2.sayHi();
obj2.sayBye();
