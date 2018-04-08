// Find median of two sorted array of different lengths
function medianOfTwoSortedArrays(x, y) {
	let avg = 0
	const z = x.concat(y).sort((a, b) => {
		if (a > b) return 1
		if ( a < b) return -1
		if (a === b) return 0
	});

	// Check if # of elements is even.
	if (z.length % 2 === 0) {
  	const n = z.length / 2

  	const a = z[n]
  	const b = z[n - 1]

  	avg = (a + b) / 2
	} else {
  	const n = (z.length - 1) / 2

  	avg = z[n]
	}

	return avg
}
