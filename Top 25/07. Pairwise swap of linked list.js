// Given a singly linked list, write a function to swap elements pairwise.
// For example, if the linked list is 1->2->3->4->5 then
// the function should change it to 2->1->4->3->5, and
// if the linked list is 1->2->3->4->5->6 then the function should change it to
//                       2->1->4->3->6->5

// Iterative solution.
// O(n)
// 1 -> 2 -> 6 -> null
// 2 -> 1 -> 6 -> null
function pairWiseSwap(head) {
  let node = head

  while (node && node.next) {
    const temp = node

    node = node.next
    node.next = temp

    node = node.next.next
  }
}
