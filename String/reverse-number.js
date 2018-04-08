// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}

function reverseInt(n) {
  const result = []
  let sign = 1

  for (let i = str.length - 1; i >= 0; i--) {
    if (i === 0 && str[i] === '-')
      sign = -1
    else
      result.push(str[i])
  }
  return parseInt(result.join('')) * sign
}
