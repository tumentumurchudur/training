// Merge two sorted linked lists and return it as a new list.
// The new list should be made by splicing together the nodes of the first two lists.
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

// Recursive solution
// O(n + m)
function merge(node1, node2) {
  if (node1 === null) {
    return node2
  } else if (node2 === null) {
    return node1
  } else if (node1 > node2) {
    node2.next = merge(node1, node2.next)
    return node2
  } else {
    node1.next = merge(node1.next, node2)
    return node1
  }
}

// p => 1 > 3 > 8  | 3  8 null
// q => 2 > 8 > 10 | 2 8
// S => 1 > 2 > 3 > 8 > 8 > 10  | 2 3 8
// Iterative solution
// O(pxq)
function merge(p, q, sorting) {
  let newRoot = null

  if (p === null && q === null) return null
  if (p === null) return q
  if (q === null) return p

  // compare head nodes.
  if (p <= q) {
    sorting = p
  } else {
    sorting = q
  }
  newHead = sorting

  while (p && q) {
    if (p <= q) {
      sorting.next = p
      sorting = p

      p = sorting.next
    } else {
      sorting.next = q
      sorting = q

      q = sorting.next
    }
  }

  if (p === null) sorting.next = q
  if (q === null) sorting.next = p

  return newHead
}
