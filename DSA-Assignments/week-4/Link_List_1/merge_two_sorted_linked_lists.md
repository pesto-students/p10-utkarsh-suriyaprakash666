## Problem Name:

merge two sorted linked lists

## Problem Statement:

Write a JavaScript function to merge two sorted
linked lists into a single sorted linked list.

## Input Format:

The first line input contains spaced-separated
integers representing the elements of an array.

The second line contains also contains spaced-separated
integers representing the elements of an array.

## Output Format:

The output should be an
array representing the
merged sorted linked list.

## Test Case 1:

sample Input
`1 3 5`
`2 4 6`

Sample Output
`[1, 2, 3, 4, 5, 6]`

## Test Case 2:

`1 2 4`
`3 5 6`

Sample output:
`[1, 2, 3, 4, 5, 6]`

## Level: Medium

## Hints:

- Create a new linked list to store the merged result.
- Traverse both linked lists simultaneously, comparing the values of nodes.
- Append the smaller value to the merged linked list.

- Move the pointer of the corresponding linked list to the next node.
- Continue this process until one of the linked lists reaches its end.
- Append the remaining nodes of the non-empty linked list to the merged linked list.

## Approach:

- Create a function to represent a node in the linked list.
- Create a function to merge two sorted linked lists.
- Create a new head and current pointer for the merged linked list.
- Traverse both linked lists simultaneously:
- Compare the values of the current nodes in the linked lists.
- Append the smaller value to the merged linked list.
- Move the pointer of the corresponding linked list to the next node.
- If any linked list reaches its end, append the remaining nodes of the non-empty linked list to the merged linked list.
- Return the merged linked list.

### Code

```JavaScript
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function mergeTwoSortedLists(l1, l2) {
  let mergedHead = new ListNode(-1);
  let current = mergedHead;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1 !== null) {
    current.next = l1;
  } else {
    current.next = l2;
  }

  return mergedHead.next;
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
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
let l1 = arrayToLinkedList(arr1);
let l2 = arrayToLinkedList(arr2);
let mergedList = mergeTwoSortedLists(l1, l2);
console.log(linkedListToArray(mergedList)); // Output: [1, 2, 3, 4, 5, 6]

// Test Case 2
arr1 = [1, 2, 4];
arr2 = [3, 5, 6];
l1 = arrayToLinkedList(arr1);
l2 = arrayToLinkedList(arr2);
mergedList = mergeTwoSortedLists(l1, l2);
console.log(linkedListToArray(mergedList)); // Output: [1, 2, 3, 4, 5, 6]
```
