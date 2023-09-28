class Transport {
  constructor(speed) {
    this.speed = speed;
  }
  go() {
    console.log("출발합니다.");
  }
  stop() {
    console.log("멈춥니다.");
  }
}

class Car extends Transport {
  constructor(speed, price, color) {
    super(speed);
    this.price = price;
    this.color = color;
  }
  go() {
    console.log("자동차가 출발합니다.");
  }
  windowOpen() {
    console.log("창문을 엽니다.");
  }
}

const car = new Car(120, 20000, "red");
console.log(car); // Car { speed: 120, price: 20000, color: 'red' }
car.go(); // 자동차가 출발합니다.
