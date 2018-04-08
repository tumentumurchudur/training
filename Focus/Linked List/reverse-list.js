class Node {
  constructor(data, next = null) {
    this.data= data;
    this.next = next;
  }
}

// L1 => L2 => L3 => L4 => null
// Iterative solution
// O(n)
function reverse(head) {
  let currNode = head
  let prevNode = null

  while(currNode) {
    let temp = currNode.next

    currNode.next = prevNode

    prevNode = currNode

    currNode = temp
  }

  return prevNode
}

// Recursive solution
// L1 => L2 => L3 => null
function reverse(head) {
  if (!head || !head.next) {
    return head
  }

  let node = reverse(head.next)

  head.next.next = head
  head.next = null
  return node
}
