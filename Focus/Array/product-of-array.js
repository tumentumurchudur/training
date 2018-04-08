/*
 Given an array of n integers where n > 1,
 return an array output such that output[i] is equal to the
 product of all the elements of nums except nums[i].

 Solve it without division and in O(n).

 For example, given [1,2,3,4], return [24,12,8,6].
*/

// Brute Force
// O(N^2)
function findProduct(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    let prod = 1

    arr.forEach((v, k) => {
      if (k !== i)
        prod *= v
    })
    result.push(prod)
  }
  return result
}

// O(N)
// left  [1,2,3,4] => [1,1,2,6]
// right [1,2,3,4] => [24,12,8,6]
function findProduct(nums) {
  let n = nums.length;
  let res = []

  // Calculate lefts and store in res.
  let left = 1;
  for (let i = 0; i < n; i++) {
    if (i > 0) {
      left = left * nums[i - 1]
    }
    res[i] = left;
  }

   // Calculate rights and the product from the end of the array.
   let right = 1;
   for (let i = n - 1; i >= 0; i--) {
     if (i < n - 1) {
       right = right * nums[i + 1];
     }
     res[i] *= right;
   }
   return res;
 }

// O(N^N)
function findProduct(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    result.push(helper([...arr.slice(0, i), ...arr.slice(i + 1, arr.length)]))
  }

  return result
}

function helper(arr) {
  let prod = 1

  arr.forEach(v => prod *= v)

  return prod
}

// [1,2,3,4]
function findProduct(nums) {
  const res = []

  // left
  let left = 1
  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      left = left * nums[i - 1]
    }
    res[i] = left
  }

  // right
  let right = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i < nums.length - 1) {
      right = right * nums[i + 1]
    }
    res[i] *= right
  }
  return res
}
