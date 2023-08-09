class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function hasCycle(head) {
  if (head === null || head.next === null) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

function detectLoop(N, value, x) {
  const newNode = new Node(value[0]);
  let head = newNode;
  let loopNode = null;

  for (let i = 1; i < N; i++) {
    head.next = new Node(value[i]);
    head = head.next;

    if (i === x) {
      loopNode = head;
    }
  }

  head.next = loopNode;

  return hasCycle(head);
}

const N = 3;
const value = [1, 3, 4];
const x = 2;

const hasLoop = detectLoop(N, value, x);
console.log(hasLoop);
