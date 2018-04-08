// Find lowest common ancesstor of the given two nodes in a binary tree.
function LCA(node, a, b) {
  if (node === null) {
    return
  }

  if (node === a || node === b) {
    return node
  }

  const left = LCA(node.left, a, b)
  const right = LCA(node.right, a, b)

  // Finds common ancestor.
  if (left !== null && right !== null) {
    return node
  }

  // right node is the common ancestor.
  if (left === null) {
    return right
  } else { // left node is the common ancestor.
    return left
  }
}
