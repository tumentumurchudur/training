/*
  Test kth bit is set: num & (1 << k) != 0
  Set kth bit: num |= (1 << k)
  Turn off kth bit: num &= ~(1 << k)
  Toggle the kth bit: num ^= (1 << k)
  To check if a number is a power of 2: num & num - 1 == 0

  XOR
  00 = 0
  01 = 1
  10 = 1
  11 = 0

*/

// console.log(parseInt("0101", 2) & parseInt("1101", 2));
// expected output: 5;

