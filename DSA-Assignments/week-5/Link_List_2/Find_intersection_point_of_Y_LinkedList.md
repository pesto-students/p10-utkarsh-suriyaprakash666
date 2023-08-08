## Problem Name:

Find intersection point of Y LinkedList

## Problem Statement:

You are given two linked lists, list1 and list2. Your task
is to find the intersection point of these two linked
lists, if it exists. The intersection point is defined as
the node at which both lists merge and become
common.

Write a program that takes input for the elements of
list1 and list2, and finds the intersection point. If there
is no intersection point, the program should output
"No Intersection Point".

## Input Format:

You are given two linked lists, list1 and list2. Your task
is to find the intersection point of these two linked
lists, if it exists. The intersection point is defined as
the node at which both lists merge and become
common.

Write a program that takes input for the elements of
list1 and list2, and finds the intersection point. If there
is no intersection point, the program should output
"No Intersection Point".

## Output Format:

The program displays the
intersection point of the two
linked lists or
"No Intersection Point" if
there is no intersection.

## Test Case 1:

sample Input
`3 6 9 12 15`
`10 11`

Sample Output
`No Intersection Point`

## Test Case 2:

Sample input:
`3 6 9 12 15`
`10 11 12 15`

Sample output:
`12`

## Level: Easy

## Hints:

- Traverse both linked lists and calculate their
  lengths.Get the difference between the lengths of the
  two lists.

- Move the pointer of the longer list by the
  difference obtained in the previous step.
  Traverse both lists in parallel until the pointers
  meet. The meeting point will be the intersection
  point.

## Approach:

- Create a Node class to represent a node in the linked list. Each node should have a
  data property and a next pointer to the next node.
- Create a LinkedList class with a head pointer initially set to null.
  Implement the insert method in the LinkedList class to add elements to the linked list.
- If the head is null, set the head to the new node; otherwise, traverse the list until the
  last node and append the new node.
- Implement the findIntersectionPoint method in the LinkedList class to find the intersection
  point of the current list with another list. Follow the approach mentioned above to
  determine the intersection point.
- Prompt the user to enter elements for both list1 and list2.
- Call the findIntersectionPoint method on list1, passing list2 as an argument.
- Display the intersection point if it exists; otherwise, display "No Intersection Point".

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

  findIntersectionPoint(anotherList) {
    if (!this.head || !anotherList.head) {
      return null; // No intersection point
    }

    let current1 = this.head;
    let current2 = anotherList.head;

    // Traverse both lists
    while (current1 !== current2) {
      current1 = current1 ? current1.next : anotherList.head;
      current2 = current2 ? current2.next : this.head;
    }

    return current1 ? current1.data : null; // Intersection point found or null
  }
}

// Input elements for list1 and list2
const elementsList1 = [3, 6, 9, 12, 15];
const elementsList2 = [10, 11];

const list1 = new LinkedList();
const list2 = new LinkedList();

for (const element of elementsList1) {
  list1.insert(element);
}

for (const element of elementsList2) {
  list2.insert(element);
}

const intersectionPoint1 = list1.findIntersectionPoint(list2);
if (intersectionPoint1 !== null) {
  console.log(intersectionPoint1);
} else {
  console.log("No Intersection Point");
}

// Input elements for list3 and list4
const elementsList3 = [3, 6, 9, 12, 15];
const elementsList4 = [10, 11, 12, 15];

const list3 = new LinkedList();
const list4 = new LinkedList();

for (const element of elementsList3) {
  list3.insert(element);
}

for (const element of elementsList4) {
  list4.insert(element);
}

const intersectionPoint2 = list3.findIntersectionPoint(list4);
if (intersectionPoint2 !== null) {
  console.log(intersectionPoint2);
} else {
  console.log("No Intersection Point");
}
```
