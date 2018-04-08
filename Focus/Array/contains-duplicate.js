// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array,
// and it should return false if every element is distinct.

// Brute force.
// O(NxN) = O(N^2)
function findDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
         return true
      }
    }
  }
  return false
}

// Sorting allowed
// O(n)
function findDuplicate(arr) {
  Array.sort(arr)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return true
    }
  }
  return false
}

// Using hashTable or hashMap
// O(n)
function findDuplicate(arr) {
  let map = {}

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      return true
    }
    map[arr[i]] = 1
  }
  return false
}
