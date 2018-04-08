// Shift given array by n
// Runtime complexity O(n)
function shiftByN(arr, n) {
	const temp = arr.slice(0, n)

	while(n > 0) {
		arr.shift()
		n--
	}

  return arr.concat(temp)
}
