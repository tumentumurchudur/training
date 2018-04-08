// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Iterative solution 1.
// O(n)
function capitalize(str) {
  let arr = str.split(' ')

  arr.forEach((word, i) => arr[i] = `${word[0].toUpperCase()}${word.substring(1)}`)

  return arr.join(' ')
}

// Iterative solution 2.
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

// Recursive solution
let result = []
function capitalize(str, i) {
  if (i === str.length) {
    return
  }

  capitalize(str, i + 1)

  if(str[i - 1] === ' ' || i === 0) {
    result.unshift(str[i].toUpperCase())
  } else {
    result.unshift(str[i])
  }
}
