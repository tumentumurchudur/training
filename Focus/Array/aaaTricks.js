// Compare every element to each other
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
       // ...
    }
  }
}

// Compare three elements using 3 nested for loops
for (let i = 0; i < arr.length - 2; i++) {
  for (let j = i + 1; j < arr.length - 1; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      const total = arr[i] + arr[j] + arr[k]
      // ...
    }
  }
}
