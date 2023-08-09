class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  isValid(temp = this.root, min = null, max = null) {
    if (temp === null) return true;
    if (
      (min !== null && temp.value <= min) ||
      (max !== null && temp.value >= max)
    )
      return false;
    let left = this.isValid(temp.left, min, temp.value);
    let right = this.isValid(temp.left, temp.value, max);

    return left && right;
  }
}

const myTree = new BST();
myTree.insert(5);
myTree.insert(1);
myTree.insert(4);
myTree.insert(null);
myTree.insert(null);
myTree.insert(3);
myTree.insert(6);

const myTree2 = new BST();
myTree.insert(2);
myTree.insert(1);
myTree.insert(3);

console.log(myTree.isValid());
console.log(myTree2.isValid());
