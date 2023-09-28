// 함수 표현식
const foo = function asd() {
  console.log("asd");
};

foo();
// asd(); 함수는 함수 이름이 아닌 함수객체를 가리키는 식별자로 호출한다.

// 함수 선언문
function boo() {
  console.log("boo");
}

boo();
/* 함수 이름은 함수 몸체 내부에서만 유효한 식별자이므로
함수 이름과는 별도로 함수를 가리키는 식별자가 필요한데
자바스크립트 엔진은 생성된 함수를 호출하기 위해 함수이름과 동일한
이름의 식별자를 암묵적으로 생성하고 거기에 함수 객체를 할당한다.
*/

console.log(add(2, 7));
// console.log(sub(4, 1));

function add(x, y) {
  return x + y;
}

const sub = function (x, y) {
  return x - y;
};

/*
함수 선언문으로 정의한 함수는 함수 선언문 이전에 호출이 가능하지만
함수 표현식으로 정의한 함수는 함수 표현식 이전에 호출할 수 없다.
*/

function countdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1);
}

countdown(10);
