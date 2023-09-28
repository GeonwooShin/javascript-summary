let x = 10;

function foo() {
  let x = 50;
  boo();
}

function boo() {
  console.log(x);
}

foo();
boo();
