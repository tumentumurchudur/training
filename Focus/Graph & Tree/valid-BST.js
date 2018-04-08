// Given a binary tree, determine if it is a valid binary search tree (BST).
function isValidBST(root) {
  return isBST(root)
}

function isBST(root, l = null, r = null) {
  // Base condition
  if (root === null) return true;

  // if left node exist that check it has correct data or not
  if (l !== null && root.val <= l.val) return false;

  // if right node exist that check it has correct data or not
  if (r !== null && root.val >= r.val) return false;

  // check recursively for every node.
  return isBST(root.left, l, root) && isBST(root.right, root, r);
}
