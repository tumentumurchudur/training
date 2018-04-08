// Given two arrays, write a function to compute their intersection.
// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

// O(nxm)
function intersect(nums1, nums2) {
  const matches = []

	for (let i = 0; i < nums2.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      if (nums2[i] === nums1[j]) {
        matches.push(nums2[i])
        nums1[j] = null

        break
      }
    }
  }
  return matches
}

// 1. What if the given array is already sorted? How would you optimize your algorithm?
//    As I iterate through the first array, I would check if the current element is within the range
//    of the second array, if it is then go ahead proceed, otherwise, advance to the next element.

// 2. What if nums1's size is small compared to nums2's size? Which algorithm is better?
//    I don't think it would make a difference since we would have to compare every element in both arrays.

// 3. What if elements of nums2 are stored on disk, and the memory is limited such that you cannot
//    load all elements into the memory at once?
//    Partially load some of nums2 and then some of nums1 and then start comparing. When done, load more...

