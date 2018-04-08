// Given a non-empty string s, you may delete at most one character.
// Judge whether you can make it a palindrome.
function isPalindrome(s) {
  return s === s.split('').reverse().join('')
}

function isPalindrome(s) {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false
    }
  }
  return true
}

// Brute force solution
// O(NxN) = O(N^2)
function validPalindrome(s) {
  for (let i = 0; i < s.length; i++) {
    const str = s.split('').filter((v, index) => index !== i).join('')

    if (isPalindrome(str)) {
      return true
    }
  }
  return false
}

// Recursive solution
// O(N)
function isPalindromeRange(s, i, j) {
  for (let k = i; k <= i + (j - i) / 2; k++) {
    if (s[k] !== s[j - (k - i)])
      return false;
  }
  return true;
}

function validPalendrome(s) {
   for (let i = 0; i < s.length() / 2; i++) {
     if (s[i] !== s[s.length() - 1 - i]) {
       let j = s.length() - 1 - i;

       return isPalindromeRange(s, i + 1, j) || isPalindromeRange(s, i, j - 1);
     }
   }
   return true;
}

