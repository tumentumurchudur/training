class Node {
    constructor(data, next = null) {
        this.data= data;
        this.next = next;
    }
}

// L1 => L2 => L3 => null
// Iterative solution
function reverseList(root) {
  let currNode = root;
  let prevNode = null;
  let nextNode = null;

  while(currNode) {
    nextNode = currNode.next;

    currNode.next = prevNode;

    prevNode = currNode;

    currNode = nextNode;
  }

  // Return the root node.
  return prevNode;
}

// Recursive solution
function reverseListRecursive(curr) {
  if (curr === null) {
    return;
  }
  if (curr.next === null) {
    // This is the head of the linked list.
    this.head = curr;
    return;
  }

  reverseListRecursive(curr.next);
  curr.next.next = curr;
  curr.next = null;
}
