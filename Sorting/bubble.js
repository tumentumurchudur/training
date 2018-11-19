let sortArray = [5, -9, 15, 150, 65]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = lesser
      }
    }
  }
  return arr
}
console.log(bubbleSort(sortArray))
