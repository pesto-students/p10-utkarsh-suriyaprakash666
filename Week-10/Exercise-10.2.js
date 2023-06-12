class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isValidBST(root, lower = -Infinity, upper = Infinity) {
  if (!root) {
    return true;
  }

  if (root.value <= lower || root.value >= upper) {
    return false;
  }

  return (
    isValidBST(root.left, lower, root.value) &&
    isValidBST(root.right, root.value, upper)
  );
}

const root1 = new TreeNode(2);
root1.left = new TreeNode(1);
root1.right = new TreeNode(3);
console.log(isValidBST(root1)); // Output: true

const root2 = new TreeNode(5);
root2.left = new TreeNode(1);
root2.right = new TreeNode(4);
root2.right.left = new TreeNode(3);
root2.right.right = new TreeNode(6);
console.log(isValidBST(root2)); // Output: false
