function solutionR1(arr) {
  let sum = 0;

  for (const val of arr) {
    sum += Array.isArray(val) ? solutionR1(val) : val;
  }
  return sum;
}

let sum = 0
function solutionR2(arr) {
  for (const val of arr) {
    if (Array.isArray(val)) {
      solutionR2(val)
    } else {
      sum += val
    }
  }
}

function solutionI2(arr) {
  return arr.toString().split(',').reduce((a, b) => (+a) + (+b));
}

function solutionI1(arr) {
  let sum = 0
  let stack = [];
  stack.push(arr);

  while (stack.length) {
    stack.shift().forEach(item => {
      if (Array.isArray(item)) {
        stack.push(item);
      } else {
        sum += item;
      }
    });
  }
  return sum;
}

const x = [1, 2, [1, 2, 3, [1, 2, 3, [1, 2, 3]]]];
console.log("solultionI1", solutionI1(x))
console.log("solultionI2", solutionI2(x))
console.log("solultionR1", solutionR1(x))
console.log("solultionR2", solutionR2(x), sum)
