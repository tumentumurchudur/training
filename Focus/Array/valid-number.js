/*
  Validate if a given string is numeric.

  Some examples:
  "0" => true
  " 0.1 " => true
  "abc" => false
  "1 a" => false
  "2e10" => true
*/

function isNumber(s) {
  /**
		 * isNumber(s)==true if and only if s=s1 or s1+'e'+s2, where s1, s2
		 * are valid strings of a number without the char 'e', and s2 is an
		 * integer.
		 *
		 * 'e' : valid_count=0~1; [boolean hasE]
		 *
		 * Valid chars in a string of a number without 'e':
		 *
		 * ' ' : valid_count=0~n; must appear at two ends
		 *
		 * '+/-' : valid_count=0~1; must be the first non-space valid char;
		 * [boolean hasFirst]
		 *
		 * '.' : valid_count=0~1; cannot appear after 'e'; [boolean hasDot]
		 *
		 * '0~9' : valid_count=1~n; [boolean hasDigit]
	*/

  s = s.trim()
  let n = s.length

  if (n === 0) {
    return false
  }

  let hasE = false
  let hasFirst = false
  let hasDot = false
  let hasDigit = false

  for (let i = 0; i < n; i++) {
    const c = s[i]

    if (c >= "0" && c <= "9") {
      hasFirst = true
      hasDigit = true

      continue
    }

    switch (c) {
      case "e":
        // already has 'e' or no digit before 'e'
        if (hasE || !hasDigit) {
          return false
        }
        hasE = true

        // reset for the exponential number
        hasFirst = false
        hasDigit = false
				hasDot = true; // the exponent must be an integer, hence
								// regard as if a dot exists already. Set
								// hasDot = false extending to accept any
								// (decimal) number as an exponent.
        continue;
      case "+":
      case "-":
        if (hasFirst)
          return false;

        hasFirst = true;
        continue;
      case ".":
        if (hasDot)
          return false;

        hasFirst = true
        hasDot = true;
        continue;
      default:
        return false;
    }
  }
  return hasDigit;
}
