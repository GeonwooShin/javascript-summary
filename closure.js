function foo() {
  let x = 1;
  function boo() {
    x++;
  }
  return boo;
}

const increaseX = foo();

increaseX();
increaseX();
increaseX();

function User(name) {
  this.name = name;
  this.greeting = function () {
    return `Hi ! ${this.name}`;
  };
}

const user1 = new User("kim");
const user2 = new User("lee");

console.log(user1.greeting());
console.log(user2.greeting());
