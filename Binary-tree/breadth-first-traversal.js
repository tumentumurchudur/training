// Breadth first traversal
function levelTraversal(node) {
	const queue = [node]

  while(queue.length) {
		const curr = queue.shift()

		queue.push(...curr.children)

		console.log(curr.data)
  }
}

// Breadth first (Iterative)
function traverseBF(fn) {
	const arr = [this.root];

	while (arr.length) {
		const node = arr.shift();

		arr.push(...node.children);
		fn(node);
	}
}

// Depth first (Iterative)
function traverseDF(fn) {
	const arr = [this.root];

	while (arr.length) {
		const node = arr.shift();

		arr.unshift(...node.children);
		fn(node);
	}
}
