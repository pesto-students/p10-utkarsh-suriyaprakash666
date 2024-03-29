## Problem Name:

Sort a linked list of 0s, 1s and 2s

## Problem Statement:

Given a linked list of 0s, 1s and 2s,
The task is to sort and print it.

## Input Format:

The program takes input from the user in the
following format:

The user is prompted to enter elements
(space-separated) to insert into the linked list.
Only values of 0, 1, and 2 are allowed.

## Output Format:

The program displays the
sorted linked list after
performing the sorting
operation.

## Test Case 1:

sample Input
`1 0 2 1 2 0`

Sample Output
`0 0 1 1 2 2`

## Test Case 2:

Sample input:
`1 2 0 2 1`

Sample output:
`0 1 1 2 2`

## Level: Easy

## Hints:

- Traverse the linked list and count the
  occurrences of 0s, 1s, and 2s, storing the counts
  in an array.

- Traverse the linked list again, replacing the
  node values with 0s, 1s, and 2s based on the
  count array.

## Approach:

- Create a Node class to represent a node in the linked list. - Each node should have a
  data property and a next pointer to the next node.
- Create a LinkedList class with a head pointer initially set to null.
- Implement the insert method in the LinkedList class to add elements to the linked list.
- If the head is null, set the head to the new node; otherwise, traverse the list until the
  last node and append the new node.
- Implement the sortLinkedList method in the LinkedList class to sort the linked list.
- Use the counting sort algorithm to count the occurrences of 0s, 1s, and 2s and update the linked list accordingly.
- Implement the display method in the LinkedList class to display the linked list values.
- Prompt the user to enter elements (0s, 1s, and 2s only) to insert into the linked list.
- Call the sortLinkedList method to sort the linked list.
- Display the sorted linked list using the display method.

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

  sortLinkedList() {
    if (!this.head) {
      return; // Empty list
    }

    const count = [0, 0, 0]; // Counts for 0, 1, and 2
    let current = this.head;

    // Count occurrences of 0s, 1s, and 2s
    while (current) {
      count[current.data]++;
      current = current.next;
    }

    // Update linked list values based on counts
    current = this.head;
    let idx = 0;

    while (current) {
      if (count[idx] === 0) {
        idx++;
      } else {
        current.data = idx;
        count[idx]--;
        current = current.next;
      }
    }
  }

  display() {
    let current = this.head;
    while (current) {
      process.stdout.write(current.data + " ");
      current = current.next;
    }
  }
}

// Test Case 1
const elementsList1 = [1, 0, 2, 1, 2, 0];
const linkedList1 = new LinkedList();

for (const element of elementsList1) {
  linkedList1.insert(element);
}

linkedList1.sortLinkedList();
linkedList1.display();
console.log();

// Test Case 2
const elementsList2 = [1, 2, 0, 2, 1];
const linkedList2 = new LinkedList();

for (const element of elementsList2) {
  linkedList2.insert(element);
}

linkedList2.sortLinkedList();
linkedList2.display();
```
