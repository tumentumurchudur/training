/*
  You are given two non-empty linked lists representing two non-negative integers.
  The digits are stored in reverse order and each of their nodes contain a single digit.
  Add the two numbers and return it as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Input: (2 -> 4 -> 3)
         (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8
  Explanation: 342 + 465 = 807.
*/
var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0);
  let node = dummyHead;
  let carry = 0;
  let a, b, c, val;

  while(l1 || l2) {
    a = l1 === null ? 0 : l1.val;
    b = l2 === null ? 0 : l2.val;

    c = a + b + carry
    val = c % 10 // for binary, it is c % 2
    carry = Math.floor(c / 10) // for binary, c / 2

    node.next = new ListNode(val)
    node = node.next

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  if (carry !== 0) {
    node.next = new ListNode(carry)
  }
  return dummyHead.next
}
