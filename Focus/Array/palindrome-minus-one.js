// Given a non-empty string s, you may delete at most one character.
// Judge whether you can make it a palindrome.
/*
  Input: "abca"
  Output: True
  Explanation: You could delete the character 'c'.
*/
function isPalindromeRange(s, i, j) {
  for (let k = i; k < i + (j - i / 2); k++) {
    if (s[k] !== s[j - (k - i)]) {
      return false
    }
  }
  return true
}

function isPalindrome(s) {
  for (let i = 0; i < s.length - 1 / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      let j = s.length - 1 - i

      return isPalindromeRange(s, i + 1, j) || isPalindromeRange(s, i, j - 1)
    }
  }
  return true
}
