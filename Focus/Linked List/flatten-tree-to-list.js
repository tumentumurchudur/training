// Flatten binary tree to linked list
// Uses post order reversed traversal.
let prev = null
flatten(root, prev)

function flatten(root, prev) {
  if (root === null) {
    return prev
  }

  prev = flatten(root.right, prev)
  prev = flatten(root.left, prev)

  root.right = prev
  root.left = null
  prev = root

  return prev
}
