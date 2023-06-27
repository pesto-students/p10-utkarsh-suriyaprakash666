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

  depth(temp = this.root) {
    if (temp === null) return -1;
    let leftDepth = this.depth(temp.left);
    let rightDepth = this.depth(temp.right);

    return Math.max(leftDepth, rightDepth) + 1;
  }
}

const myTree = new BST();
myTree.insert(3);
myTree.insert(9);
myTree.insert(20);
myTree.insert(null);
myTree.insert(null);
myTree.insert(15);
myTree.insert(7);

console.log(myTree);
console.log(myTree.depth());
