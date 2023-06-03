class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  print() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  // Inserting elements in the end of linked list
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  RotateLeft(k) {
    let temp = this.head;
    let count = 1;
    if (!temp) return undefined;

    if (k <= 0) return undefined;

    while (count < k && temp) {
      temp = temp.next;
      count++;
    }

    let kthNode = temp;

    while (temp.next) {
      temp = temp.next;
    }

    temp.next = this.head;
    this.head = kthNode.next;
    kthNode.next = null;
  }
}

const List = new LinkedList(1);
List.push(2);
List.push(3);
List.push(4);
List.push(5);
List.push(6);

console.log("Before Rotate ->");
List.print();

List.RotateLeft(3);

console.log("After Rotate ->");
List.print();
