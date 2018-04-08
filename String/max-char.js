// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Iterative solution
// O(n) - linear
function maxChar(str) {
  let track = {}
  let max = 0
  let maxChar = ''

  for(let i = 0; i < str.length; i++) {
    const curr = str[i]

    if (!track[curr]) {
      track[curr] = 1
    } else {
      track[curr]++

      if (track[curr] > max) {
        max = track[curr]
        maxChar = curr
      }
    }
  }
  return maxChar
}

// Iterative solution 2
// O(n + n) = O(2n) = O(n)
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  // Extra for loop
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

// Recursive solution
// const str = "aabccc"
// maxChar(str, 0)
const result = {}
function maxChar(str, i, result) {
  if (i === str.length) {
    return
  }

  maxChar(str, i + 1, result)

  if (result[str[i]]) {
    result[str[i]]++
  } else {
    result[str[i]] = 1
  }
}
