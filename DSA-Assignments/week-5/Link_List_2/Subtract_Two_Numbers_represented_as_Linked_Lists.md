## Problem Name:

Subtract Two Numbers represented as Linked Lists

## Problem Statement:

You are given two linked lists that represent
two non-negative integers. The digits are stored in
reverse order, and each node of the linked list contains
a single digit. Your task is to subtract the second
linked list from the first linked list and return the result
as a new linked list.

Write a JavaScript program that takes input for the
two linked lists and performs the subtraction
operation.

## Input Format:

The program should prompt the user to enter the
elements of the first linked list and the second
linked list. The elements should be separated
by spaces.

## Output Format:

The program should display
the result of the subtraction
operation as a linked list.

## Test Case 1:

sample Input
`3 2 1`
`1 2`

Sample Output
`2 9`

## Test Case 2:

Sample input:
`5 0`
`5`

Sample output:
`0 5`

## Level: Hard

## Hints:

- Traverse both linked lists simultaneously.
  At each step, subtract the corresponding digits from the
  linked lists, taking into account any borrow from the
  previous step.
  If the result of subtraction is negative, add 10 to the result
  and set the borrow flag to 1.

- Create a new linked list to store the
  result digits.
  Repeat steps 2-4 until both linked lists are
  exhausted.
  Return the resulting linked list.

## Approach:

- Create a Node class to represent a node in the linked list.
- Each node should have a data property and a next pointer to the next node.
- Create a LinkedList class with a head pointer initially set to null.
- Implement the insert method in the LinkedList class to add
  elements to the linked list. If the head is null, set the head to the new node;
- otherwise, traverse the list until the last node and append the new node.
- Implement the subtract method in the LinkedList class to subtract the
  second linked list from the first linked list. Follow the hints and approach
  mentioned above to perform the subtraction operation.
- Implement the toString method in the LinkedList class to convert the linked
  list into a string representation.
- Implement the subtractLinkedLists function as the main program.
- Prompt the user to enter the elements of the first and second linked lists,
  create instances of the LinkedList class, insert the elements into the linked lists,
  perform the subtraction operation, and display the result.

### Code

```JavaScript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  subtract(anotherList) {
    const result = new LinkedList();
    let current1 = this.head;
    let current2 = anotherList.head;
    let borrow = 0;

    while (current1 || current2) {
      const val1 = current1 ? current1.data : 0;
      const val2 = current2 ? current2.data : 0;

      let diff = val1 - val2 - borrow;

      if (diff < 0) {
        diff += 10;
        borrow = 1;
      } else {
        borrow = 0;
      }

      result.insert(diff);

      if (current1) {
        current1 = current1.next;
      }
      if (current2) {
        current2 = current2.next;
      }
    }

    return result;
  }

  toString() {
    let current = this.head;
    let result = "";
    while (current) {
      result = current.data + " " + result;
      current = current.next;
    }
    return result.trim();
  }
}

// Test Case 1
const elementsList1 = [3, 2, 1];
const elementsList2 = [1, 2];
const list1 = new LinkedList();
const list2 = new LinkedList();

for (const element of elementsList1) {
  list1.insert(element);
}

for (const element of elementsList2) {
  list2.insert(element);
}

const result1 = list1.subtract(list2);
console.log(result1.toString());

// Test Case 2
const elementsList3 = [5, 0];
const elementsList4 = [5];
const list3 = new LinkedList();
const list4 = new LinkedList();

for (const element of elementsList3) {
  list3.insert(element);
}

for (const element of elementsList4) {
  list4.insert(element);
}

const result2 = list3.subtract(list4);
console.log(result2.toString());
```
