class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const maxDepth = (root) => {
  if (root === null) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};

const root1 = new TreeNode(3);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20);
root1.right.left = new TreeNode(15);
root1.right.right = new TreeNode(7);

console.log("Output:", maxDepth(root1)); // Output: 3
