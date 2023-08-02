## Problem Name:

Remove Duplicates

## Problem Statement:

Write a JavaScript function to remove duplicates
from a singly linked list.

## Input Format:

The input contains spaced-separated
integers representing the elements of an array.

## Output Format:

The output should be an
array representing the
linked list after removing
duplicates.

## Test Case 1:

sample Input
`1 2 3 2 4 1`

Sample Output
`[1, 2, 3, 4]`

## Test Case 2:

Sample input:
`1 1 1 1`

Sample output:
`[1]`

## Level: Easy

## Hints:

- You can use a hash set to keep track of unique
  values.Traverse the linked list and check if each value
  is already present in the hash set.

- If a value is already in the hash set, skip that
  node by modifying the "next" pointer of the
  previous node.If a value is not in the hash set, add it to the
  hash set and move to the next node.

## Approach:

- Initialize a hash set to store unique values.
- Create a head pointer and initialize it with the first node of the linked list.
- Traverse the linked list using a loop until the current node is not null.
  Inside the loop:
- Check if the value of the current node is already present in the hash set.
- If it is, skip that node by modifying the "next" pointer of the previous node.
- If it is not, add the value to the hash set and move the previous pointer to
  the current node.
- Finally, return the modified linked list.

### Code

```JavaScript
// Definition for a singly-linked list node
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function removeDuplicates(head) {
  if (!head) {
    return head;
  }

  let uniqueValues = new Set();
  let current = head;
  let previous = null;

  while (current !== null) {
    if (uniqueValues.has(current.val)) {
      previous.next = current.next;
    } else {
      uniqueValues.add(current.val);
      previous = current;
    }
    current = current.next;
  }

  return head;
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
let arr1 = [1, 2, 3, 2, 4, 1];
let linkedList = arrayToLinkedList(arr1);
let modifiedList = removeDuplicates(linkedList);
console.log(linkedListToArray(modifiedList)); // Output: [1, 2, 3, 4]

// Test Case 2
arr1 = [1, 1, 1, 1];
linkedList = arrayToLinkedList(arr1);
modifiedList = removeDuplicates(linkedList);
console.log(linkedListToArray(modifiedList)); // Output: [1]
```
