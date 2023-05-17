//call a function on an object

function Cat(name, age) {
  this.name = name;
  this.age = age;
}

Cat.prototype.meow = function() {
  console.log(`${this.name} says meow!`);
};

const fluffy = new Cat('Fluffy', 3);
const whiskers = new Cat('Whiskers', 5);

fluffy.meow();   // Output: Fluffy says meow!
whiskers.meow(); // Output: Whiskers says meow!


//creating array methods

Array.prototype.customMethod = function() {
  // Access the array using 'this'
  console.log('Array length:', this.length);
  console.log('Array elements:', this);
};

const numbers = [1, 2, 3, 4, 5];
numbers.customMethod();

const dogs = ["doogy","dog-face","bouncy dog"]
dogs.customMethod()
