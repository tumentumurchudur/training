// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character. Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Recursive solution.
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

// Iterative solution in terms of matrix.
// Draw a matrix and then analyze where # and space appear in each cell.
// O(n x n) = O(n^2)
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = ''

    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += '#'
      } else {
        stair += ' '
      }
    }
    console.log(stair)
  }
}

// My implementation. (Iterative)
// O(n^2)
function steps(n) {
  for(let i = 1; i <= n; i++) {
  	const pounds = i
    const spaces = n - i

    print(pounds, spaces)
  }
}

function print(pounds, spaces) {
  let out = ''

  while (pounds > 0) {
    out += '#'
    pounds--
  }

  while(spaces > 0) {
    out += ' '
    spaces--
  }

  console.log(`${out} \n`)
}

// Recursive solution 1
// steps(5, 5); // start at index 5
function steps(n, curr) {
  if (curr === 0) {
    return
  }

  steps(n, curr - 1)

  const pounds = curr
  const spaces = n - curr

  print(pounds, spaces)
}

// Recursive solution 2
// steps(5, 0); // start at index 0
function steps(n, curr) {
  if (curr > n) {
    return
  }

  const pounds = curr
  const spaces = n - curr

	if (pounds > 0 && spaces >= 0) {
    print(pounds, spaces)
  }

  steps(n, curr + 1)
}

function repeat(times, char) {
  let str = ''
  for (let i = 0; i < times; i++)
   str += char

  return str
}

function steps(n) {
  for(let i = 1; i <= n; i++) {
  	const pounds = i
    const spaces = n - i

    print(pounds, spaces)
  }
}

function print(pounds, spaces) {
  console.log(repeat(pounds, '#'), repeat(spaces, ' '))
}