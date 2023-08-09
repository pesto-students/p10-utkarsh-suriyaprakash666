// Call
function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = {
  name: "Suriya",
};

greet.call(person); // output: Hello, Suriya!

// Bind
function greetWithGreeting(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const person2 = {
  name: "Prakash",
};

const greetHi = greetWithGreeting.bind(person2, "Hi");

greetHi(); // output: Hi, Prakash!

// Apply
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

const result = sum.apply(null, numbers);
console.log(result); // output: 6
