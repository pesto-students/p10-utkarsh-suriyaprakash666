let iter = {
  a: 0,
  b: 1,
  n: 0,
  count: 0,
  Fibonacci(n) {
    this.n = n;
  },
  [Symbol.iterator]() {
    return this;
  },
  next() {
    let v = this.count;
    if (this.count > 1) {
      v = this.a + this.b;
      this.a = this.b;
      this.b = v;
    }
    this.count++;
    return { value: v, done: this.count > this.n };
  },
};

iter.Fibonacci(8);
let x = iter.next();
while (!x.done) {
  console.log(x.value);
  x = iter.next();
}
