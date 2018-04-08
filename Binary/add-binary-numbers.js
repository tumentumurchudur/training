// a = "11"
// b = "1"
function addBinary(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0) {
    const m = i < 0 ? 0 : a[i] | 0;
    const n = j < 0 ? 0 : b[j] | 0;

    carry += m + n; // sum of two digits
    result = carry % 2 + result; // string concat
    carry = carry / 2 | 0; // remove decimals,  1 / 2 = 0.5, only get 0

    i--;
    j--;
  }

  if(carry !== 0) {
    result = carry + result;
  }
  return result;
};

// 101101
//   1011
//-------
//
function addBinary(a, b) {
  let i = a.length - 1
  let j = b.length - 1
  let carry = 0
  let result = ''

  while (i >= 0 || j >= 0) {
    let s1 = i < 0 ? 0 : a[i] | 0
    let s2 = j < 0 ? 0 : b[j] | 0

    carry += s1 + s2
    result = carry % 2 + result
    carry = carry / 2 | 0

    i--
    j--
  }
  return result
}
