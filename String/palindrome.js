// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').every((char, i) => char === str[str.length - 1 - i]);
}

function palindrome(str) {
  return str === str.split('').reverse().join('')
}

// Ignore special characters and spaces.
// "A man, a plan, a canal: Panama"
// console.log("A man, a plan, a canal: Panama".replace(/[^\w]/g ,'')); //AmanaplanacanalPanama
var isPalindrome = function(s) {
  const reversed = s.replace(/[^\w]/g, '').toLowerCase().split('').reverse().join('')
  const original = s.replace(/[^\w]/g, '').toLowerCase()

  return reversed === original
};

// /[^\w]/g => w = [a-zA-Z0-9_]