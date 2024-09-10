// Exercise 1
const greeter = (myArray, counter) => {
  let greetText = "hello ";
  for (let item of myArray) {
    console.log(greetText + item);
  }
};
greeter(["Randy Savage", "Ric Flair", "Hulk Hogan"]);

// Exercise 2
const capitalize = ([...s]) => {
  return s[0].toUpperCase() + s.slice(1).join("");
};
console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));

// Exercise 3
const colors = ["red", "green", "blue"];
const capitalizedColors = colors.map((i) => {
  return capitalize(i);
});
console.log(capitalizedColors);

// Exercise 4
const values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter((i) => i < 20);
console.log(filterLessThan20);

// Exercise 5
const array = [1, 2, 3, 4];
const calculateSum = array.reduce((curr, acc) => acc + curr);
const calculateProduct = array.reduce((curr, acc) => acc * curr);
console.log(calculateSum);
console.log(calculateProduct);

// Exercise 6
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  details() {
    return `Model: ${this.model} Engine: ${this.year}`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }
  info() {
    return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
  }
}

const car2 = new Car("Pontiac Firebird", 1976);
console.log(car2.details());
const sedan = new Sedan("Volvo SD", 2018, 30000);
console.log(sedan.info());
