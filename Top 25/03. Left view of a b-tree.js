// Given a Binary Tree, print left view of it.
// Left view of a Binary Tree is set of nodes visible when tree is visited from left side.
function leftView(root, level, max_level) {
  if (root === null) {
    return
  }

  // Check if it is the first node of its level
  if (level > max_level) {
    console.log(root)
    max_level = level
  }

  leftView(node.left, level + 1, max_level)
  leftView(node.right, level + 1, max_level)
}

leftView(root, 1, 0)

function rightView(root, level, max_level) {
  if (root === null) {
    return
  }

  if (level > max_level) {
    console.log(root)
    max_level = level
  }

  rightView(root.right, level + 1, max_level)
  rightView(root.left, level + 1, max_level)
}

rightView(root, 1, 0)

function leftView(root, level, max_level) {
  if (root === null) return

  if (level > max_level) {
    console.log(root)
    max_level = level
  }
  leftView(root.left, level + 1, max_level)
  leftView(root.right, level + 1, max_level)
}
leftView(root, 1, 0)

function rightView(root, level, max_level) {
  if (root === null) return null

  if (level > max_level) {
    console.log(root)
    max_level = level
  }
  rightView(root.right, level + 1, max_level)
  rightView(root.left, level + 1, max_level)
}
rightView(root, 1, 0)
