// Min jumps to the end of the given array
// Each jump can be same as the value at nth index
// const arr = [2, 3, 1, 1, 2, 4, 2, 0, 1, 1]
// 2 => 3 => => 2 => 4 => end (4 jumps)

function minJumps(arr) {
	let i = 0
	let jumps = 0

	while (i < arr.length) {
		const currVal = arr[i]
		let jumpToIndex = i + currVal

		for(let j = i + 1; j <= jumpToIndex; j++) {
			if (arr[j] > currVal) {
				jumpToIndex = j
			}
		}

		if (jumpToIndex >= arr.length - 1) {
			jumps++
			break
		}

		jumps++
		i = jumpToIndex
	}
	return jumps
}
