let iterator = {
  a: 0,
  b: 1,
  n: 0,
  count: 0,
  Fibonacci(num) {
    this.num = num;
  },
  [Symbol.iterator]() {
    return this;
  },
  next() {
    let val = this.count;
    if (this.count > 1) {
      val = this.a + this.b;
      this.a = this.b;
      this.b = val;
    }
    this.count++;
    return { value: val, done: this.count > this.num };
  },
};

iterator.Fibonacci(8);
let x = iterator.next();
while (!x.done) {
  console.log(x.value);
  x = iterator.next();
}
