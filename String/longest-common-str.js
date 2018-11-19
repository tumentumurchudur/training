// Find the longest common string in the given two strings.
// Create a matrix using the two strings
// const str1 = "LCLC"
// const str2 = "CLCA"
/*
  [
	//     L  C  L  C
  // C	[0, 0, 0, 0], // C
	// L	[0, 0, 1, 0], // L
	// C	[0, 0, 0, 2], // C
	// A	[0, 0, 0, 0]  // A
	]

	Populate the matrix and look diagnally for any matches
*/
// O(NxM)
function findLongestMatch(s1, s2) {
	const len1 = s1.length
	const len2 = s2.length
	const matrix = []
	let result = [] // keep track of longest string
	let max = 0

	for (let i = 0; i < len1; i++) {
		for (let j = 0; j < len2; j++) {
			// match found
			if (s1[i] === s2[j]) {
				// first row or column
				if (i === 0 || j === 0) {
					matrix[i][j] = 1
				} else {
					matrix[i][j] = matrix[i - 1][j - 1] + 1
				}

				// Check if current value is greater than max.
				if (matrix[i][j] > max) {
					max = matrix[i][j]
					result = []
					result.push(s1.substring(i - max + 1, i + 1))
				} else if (matrix[i][j] === max) {
					result.push(s1.substring(i - max + 1, i + 1))
				}
			} else { // no match
				matrix[i][j] = 0
			}
		}
	}
	return result.pop();
}
