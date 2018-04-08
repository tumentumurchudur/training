/*
  Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
  determine if the input string is valid.

  The brackets must close in the correct order, "()" and "()[]{}" are all valid
  but "(]" and "([)]" are not.
*/

// O(N)
function isValid(str) {
  const stack = []

  for (let char of str) {
    if (char === '(') {
      stack.push(')')
    } else if (char === '{') {
      stack.push('}')
    } else if (char === '[') {
      stack.push(']')
    } else if (c !== stack.pop()) {
      return false
    }
  }

  if (stack.length) {
    return false
  }
  return true
}
