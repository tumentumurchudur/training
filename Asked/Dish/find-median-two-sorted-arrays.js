// Find median of two sorted array of different lengths
function medianOfTwoSortedArrays(x, y) {
	const z = x.concat(y).sort((a, b) => {
		if (a > b) return 1;
		if (a < b) return -1;
		return 0;
	});

	// Check if # of elements is even.
	if (z.length % 2 === 0) {
  	const n = z.length / 2;

  	return (z[n] + z[n - 1]) / 2;
	} else {
  	const n = (z.length - 1) / 2;

  	return z[n];
	}
}

// even [1, 3, 5, 10]
// odd  [1, 3, 5, 10, 15]
