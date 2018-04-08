// Find lowest common ancestor of two nodes in a binary tree
// Recursive solution.
function findLCA(node, a, b) {
  if (node === null) {
      return null;
  }

  if (node === a || node === b) {
      return node;
  }

  const left = findLCA(node.left, a, b);
  const right = findLCA(node.right, a, b);

  // Lowest common ancestor found here it is the
  // point where left and right nodes diverged.
  if (left !== null && right !== null) {
      return node;
  }

  if (left === null) {
      return right;
  } else {
      return left;
  }
}

function findLCA(node, a, b) {
    if (node === null) return null
    if (node === a || node === b) return node

    const left = findLCA(node.left, a, b)
    const right = findLCA(node.right, a, b)

    // Find lowest common ancestor
    if (left && right) {
        return node
    }

    if (!left) return right
    if (!right) return left
}
