// Post order traversal
function postOrder(node) {
	if (node === null) {
			return
	}

	postOrder(node.left)
	postOrder(node.right)

  console.log('consume node:', node)
}

// Pre order traversal
function preOrder(node) {
	if (node === null) {
		return null
	}

	console.log('consume node:', node)
	preOrder(node.left)
	preOrder(node.right)
}

// In order traversal
function inOrder(node) {
	if (node === null) {
		return
	}

	inOrder(node.left)
	console.log('consume node:', node)
	inOrder(node.right)
}
