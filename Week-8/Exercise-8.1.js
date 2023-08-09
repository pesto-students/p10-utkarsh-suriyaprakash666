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

  rotateLeft(value) {
    while (value > 0 && value < this.length) {
      let temp = this.head;
      this.head = this.head.next;
      this.tail = temp;
    }
    return this;
  }
}

const List = new LinkedList(1);
List.push(2);
List.push(3);
List.push(4);
List.push(5);
List.push(6);

console.log("Before Reversing List -> ");
List.print();

List.reverse();

console.log("After Reversing List -> ");
List.print();
