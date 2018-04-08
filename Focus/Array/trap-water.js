/*
  Given n non-negative integers representing an elevation map
  where the width of each bar is 1, compute how much water it is able to trap after raining.

  For example,
  Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
*/

// Brute force
// O(NxN) = O(N^2)
function trapWater(height) {
  let ans = 0;
  let size = height.length;

  // start from index 1 to one before the end. ( < size - 1)
  for (let i = 1; i < size - 1; i++) {
    let max_left = 0;
    let max_right = 0;

    // Search the left part for max bar size
    for (let j = i; j >= 0; j--) {
      max_left = Math.max(max_left, height[j]);
    }

    // Search the right part for max bar size
    for (let j = i; j < size; j++) {
      max_right = Math.max(max_right, height[j]);
    }

    // Formula to find the trapped water
    ans += Math.min(max_left, max_right) - height[i];
  }
  return ans;
}

// O(N)
// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
function trapWater(height) {
  let n = height.length
  let left = 0
  let right = n - 1
  let res = 0
  let maxLeft = 0
  let maxRight = 0

  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left]
      } else {
        res += maxLeft - height[left]
      }
      left++
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right]
      } else {
        res += maxRight - height[right]
      }
      right--
    }
  }
  return res
}
