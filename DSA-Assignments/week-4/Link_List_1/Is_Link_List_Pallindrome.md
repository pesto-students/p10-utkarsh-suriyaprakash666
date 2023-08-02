## Problem Name:

Is Link List Palindrome

## Problem Statement:

Implement a JavaScript function to check if a given
linked list is a palindrome.

## Input Format:

The input contains spaced-separated
integers representing the elements of an array.

## Output Format:

The output
should be a boolean value
indicating whether the
linked list is a palindrome
or not.

## Test Case 1:

sample Input
`1 2 3 2 1`

Sample Output
`true`

## Test Case 2:

Sample input:
`1 2 3 3 1`

Sample output:
`false`

## Level: Easy

## Hints:

- Use a two-pointer approach to find the
  middle of the linked list.
- Reverse the second half of the linked list.
- Compare the reversed second half with the first
  half to check for palindromicity.

## Approach:

- Create a function to reverse a linked list.
- Create a function to find the middle node of a linked list using the two-pointer technique.
- Split the linked list into two halves using the middle node.
- Reverse the second half of the linked list.
- Compare the reversed second half with the first half by traversing both simultaneously.
- If all the values match, return true (indicating a palindrome). Otherwise, return false.

### Code

```JavaScript
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}

function findMiddleNode(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function isLinkedListPalindrome(head) {
  if (head === null || head.next === null) {
    return true;
  }

  const middleNode = findMiddleNode(head);
  let secondHalf = reverseLinkedList(middleNode);
  let firstHalf = head;

  while (secondHalf !== null) {
    if (firstHalf.val !== secondHalf.val) {
      return false;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true;
}

function createLinkedListFromArray(arr) {
  let head = null;
  let tail = null;

  for (const val of arr) {
    const newNode = new ListNode(val);
    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  }

  return head;
}

// Example usage:
const arr1 = [1, 2, 3, 2, 1];
const linkedList1 = createLinkedListFromArray(arr1);
console.log(isLinkedListPalindrome(linkedList1)); // Output: true

const arr2 = [1, 2, 3, 3, 1];
const linkedList2 = createLinkedListFromArray(arr2);
console.log(isLinkedListPalindrome(linkedList2)); // Output: false
```
