// find all permutations of the given array
function findPermutations(arr) {
  if (!arr.length) return []
  arr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;
  });
  let res = {}
  helper(arr, 0, res)

  return Object.keys(res).map(key => res[key])
}

function helper(arr, i, res) {
  if (i === arr.length - 1) {
    res[arr.toString()] = arr.slice(0)
    return
  }

  for (let j = i; j < arr.length; j++) {
    if (j !== i && arr[j] === arr[i]) continue

    swap(arr, i, j)
    helper(arr, i + 1, res)
    swap(arr, i, j)
  }
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
