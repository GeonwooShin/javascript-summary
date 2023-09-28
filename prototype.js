function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  };
}

const circle1 = new Circle(3);
const circle2 = new Circle(4);

console.log(circle1.getArea());
console.log(circle2.getArea());
console.log(circle1.getArea === circle2.getArea);

function Circle2(radius) {
  this.radius = radius;
  Circle2.prototype.getArea = function () {
    return Math.PI * radius ** 2;
  };
}

const circle3 = new Circle2(3);
const circle4 = new Circle2(4);

console.log(circle3.getArea());
console.log(circle4.getArea());
console.log(circle3.getArea === circle4.getArea);

const person = {
  name: "Lee",
  address: "qwe",
  age: 20,
};

for (const prop in person) {
  console.log(prop);
}

console.log(Object.keys(person));
console.log(Object.values(person));
Object.entries(person).forEach(([key, value]) => console.log(key, value));
