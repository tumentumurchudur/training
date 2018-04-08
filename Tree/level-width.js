// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// Iterative solution.
function levelWidth(root) {
	const arr = [root, 's'];
	const counters = [0];

	while (arr.length) {
		const node = arr.shift();

		if (node === 's') {
			counters.push(0);
			arr.push('s');
		} else {
			arr.push(...node.children);
			counters[counters.length - 1]++;
		}
	}
  return counters;
}

// Return an array of numbers representing the # of nodes at each level.
function countLevel(root) {
	const arr = [root, 'e']
	const counter = [0]

	while (arr.length) {
		const node = arr.shift()

		if (node === 'e') {
			arr.push('e')
			counter.push(0)
		} else {
			arr.push(...node.children)
			counter[counter.length - 1]++
		}
	}
	return counter
}
