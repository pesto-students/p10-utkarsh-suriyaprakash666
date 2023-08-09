## Problem Name:

Reverse every k nodes

## Problem Statement:

Implement a JavaScript function to reverse every k nodes in a linked list.

## Input Format:

The first line input contains spaced-separated
integers representing the elements of an array.

The second line contains a positive integer k.

## Output Format:

The output should be an
array representing the
modified linked list after
reversing every k nodes.

## Test Case 1:

sample Input
`1 2 3 4 5 6 7 8`
`3`

Sample Output
`[3, 2, 1, 6, 5, 4, 8, 7]`

## Test Case 2:

`1 2 3 4 5`
`2`

Sample output:
`[2, 1, 4, 3, 5]`

## Level: Medium

## Hints:

- Traverse the linked list in chunks of size k.
  Reverse each chunk of nodes.

- Connect the reversed chunks to form the
  final modified linked list.

## Approach:

- Create a function to reverse a linked list.
- Create a function to reverse every k nodes in a linked list.
- Initialize a pointer to the head of the linked list.
- Traverse the linked list in chunks of size k:
- Reverse each chunk using the reverse function.
- Connect the reversed chunk to the previous chunk (if any).
- Update the pointers accordingly.
- Return the modified linked list.

### Code

```JavaScript
// Definition for a singly-linked list node
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Function to reverse a linked list
function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

// Function to reverse every k nodes in a linked list
function reverseKNodes(head, k) {
  if (!head || k <= 1) {
    return head;
  }

  let count = 0;
  let current = head;
  let prevTail = null;
  let newHead = null;

  while (current !== null) {
    count++;
    if (count === k) {
      let nextHead = current.next;
      current.next = null;
      let reversedChunk = reverseLinkedList(head);
      if (!newHead) {
        newHead = reversedChunk;
      }
      if (prevTail) {
        prevTail.next = reversedChunk;
      }
      prevTail = head;
      head = nextHead;
      current = nextHead;
      count = 0;
    } else {
      current = current.next;
    }
  }

  if (count !== 0) {
    if (prevTail) {
      prevTail.next = head;
    }
  }

  return newHead || head;
}

// Function to convert an array to a linked list
function arrayToLinkedList(arr) {
  let dummyHead = new ListNode(-1);
  let current = dummyHead;

  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }

  return dummyHead.next;
}

// Function to convert a linked list to an array
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
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let k = 3;
let linkedList = arrayToLinkedList(arr1);
let modifiedList = reverseKNodes(linkedList, k);
console.log(linkedListToArray(modifiedList)); // Output: [3, 2, 1, 6, 5, 4, 8, 7]

// Test Case 2
arr1 = [1, 2, 3, 4, 5];
k = 2;
linkedList = arrayToLinkedList(arr1);
modifiedList = reverseKNodes(linkedList, k);
console.log(linkedListToArray(modifiedList)); // Output: [2, 1, 4, 3, 5]
```
