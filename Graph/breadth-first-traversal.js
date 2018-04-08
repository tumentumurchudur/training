// Representation of a graph using an array
// 0 is connected to 1, 2 and 3 and 4 is connected 1.
const myGraph = [
// 0  1  2  3  4
	[0, 1, 1, 1, 0],  // 0 node data
	[0, 0, 1, 0, 0],  // 1
	[1, 1, 0, 0, 0],  // 2
	[0, 0, 0, 1, 0],  // 3
	[0, 1, 0, 0, 0]   // 4
]

bfs(graph, 1)

// Breadth first traversal of a graph
// Finds distances to different nodes from root node.
function bfs(graph, root) {
	// store distances to root node.
	let nodesLen = {}

	// Initialize nodesLen object.
	for (let i = 0; i < graph.length; i++) {
		nodesLen[i] = Infinity
	}

	// distance to itself is always 0.
	nodesLen[root] = 0

	const queue = [root]
	let current

	// Loop until queue is empty.
	while(queue.length) {
		current = queue.shift()

		// get all nodes connected to current node.
		const curConnected = graph[current]
		const neigborIdx = []
		// gets first node connected to current node.
		const idx = curConnected.indexOf(1)

		// Find indecis of all neighboring nodes and push them to array.
		while(idx !== -1) {
			neigborIdx.push(idx)
			idx = curConnected.indexOf(1, idx + 1)
		}

		// Loop through these connected nodes to current node.
		for (let j = 0; j < neigborIdx.length; j++) {
			// Check if neighboring nodes have distance values to the current node.
			if (nodesLen[neigborIdx[j]] === Infinity) {
				nodesLen[neigborIdx[j]] = nodesLen[current] + 1
				queue.push(neigborIdx[j])
			}
		}
	}
	return nodesLen
}
