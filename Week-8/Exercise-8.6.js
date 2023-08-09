class QueueUsingStacks {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enqueue(x) {
    this.s1.push(x);
  }

  dequeue() {
    if (this.s2.length === 0) {
      if (this.s1.length === 0) {
        return -1;
      }
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }

    return this.s2.pop();
  }
}

const queue = new QueueUsingStacks();
const output = [];
const inputs = [[1, 2], [1, 3], [2], [1, 4], [2]];

for (let i = 0; i < inputs.length; i++) {
  const [query, value] = inputs[i];
  if (query === 1) {
    queue.enqueue(value);
  } else if (query === 2) {
    const poppedElement = queue.dequeue();
    output.push(poppedElement);
  }
}
console.log(output.join(" ")); // Output: 2 3
