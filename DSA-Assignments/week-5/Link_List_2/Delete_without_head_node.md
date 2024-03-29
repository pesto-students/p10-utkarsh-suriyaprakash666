## Problem Name:

Delete without head node

## Problem Statement:

Delete a node without the head node in a linked list

## Input Format:

The program takes input from the user in the
following format:

First, the user is prompted to enter elements
(space-separated) to insert into the linked list.
Then, the user is prompted to enter the
value of the element to be deleted without the
head node.

## Output Format:

The program displays the
resulting linked list after the
deletion operation.

## Test Case 1:

sample Input
`10 20 30 40 50`
`30`

Sample Output
`10 20 40 50`

## Test Case 2:

Sample input:
`5 10 15 20`
`5`

Sample output:
`10 15 20`

## Level: Easy

## Hints:

- Check if the given node is null or the next node
  is null.If so, return since deletion is not possible.
  Copy the data of the next node to the given node.

- Set the next pointer of the given node to the
  next node's next.Set the next pointer of the next node to null.

## Approach:

- Create a Node class to represent a node in the linked list.
- Each node should have a data property and a next pointer to the next node.
- Create a LinkedList class with a head pointer initially set to null.
- Implement the insert method in the LinkedList class to add elements to the linked list.
- If the head is null, set the head to the new node; otherwise, traverse the list until the
  last node and append the new node.
- Implement the `deleteWithoutHead`

### Code

```JavaScript
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function deleteWithoutHead(nodeToDelete) {
  if (!nodeToDelete || !nodeToDelete.next) {
    return;
  }

  let nextNode = nodeToDelete.next;
  nodeToDelete.val = nextNode.val;
  nodeToDelete.next = nextNode.next;
}

function arrayToLinkedList(arr) {
  let dummyHead = new ListNode(-1);
  let current = dummyHead;

  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }

  return dummyHead.next;
}

function linkedListToArray(head) {
  let result = [];
  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

// Test Case 1
let arr1 = [10, 20, 30, 40, 50];
let deleteValue = 30;
let linkedList = arrayToLinkedList(arr1);
let nodeToDelete = linkedList;
while (nodeToDelete && nodeToDelete.val !== deleteValue) {
  nodeToDelete = nodeToDelete.next;
}
deleteWithoutHead(nodeToDelete);
console.log(linkedListToArray(linkedList)); // Output: [10, 20, 40, 50]

// Test Case 2
arr1 = [5, 10, 15, 20];
deleteValue = 5;
linkedList = arrayToLinkedList(arr1);
nodeToDelete = linkedList;
while (nodeToDelete && nodeToDelete.val !== deleteValue) {
  nodeToDelete = nodeToDelete.next;
}
deleteWithoutHead(nodeToDelete);
console.log(linkedListToArray(linkedList)); // Output: [10, 15, 20]
```
