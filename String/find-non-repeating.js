// Find non repeating characters in a string.
// const str = 'abcab';
// c is a non repeating character because it appears once in str.

// O(n + o)
function findNonRepeat(str) {
  // Returns an object with character counts.
  // Each character is a property in the object and
  // the value is how many times it appears in the given string.
  const track = countChars(str)
  const nonRepeat = []

  Object.keys(track).forEach(key => {
    if (track[key] === 1) {
      nonRepeat.push(key)
    }
  })

  return nonRepeat
}

function countChars(str) {
  const track = {}

  for(let i = 0; i < str.length; i++) {
    const char = str[i]

    if (!track[char]) {
      track[char] = 1
    } else {
      track[char]++
    }
  }
  return track
}

// Iterative solution
// O(n)
function findNonRepeat(str) {
  const map = {}
  let noRepeats = []

  for(let i = 0; i < str.length; i++) {
    const char = str[i]

    if (!map[char]) {
      map[char] = 1
      noRepeats.push(char)
    } else {
      map[char]++
      noRepeats = noRepeats.filter(c => c !== char)
    }
  }
  return noRepeats.join(' ')
}
