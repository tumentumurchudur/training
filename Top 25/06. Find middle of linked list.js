// Given a singly linked list, find middle of the linked list.
// For example, if given linked list is 1->2->3->4->5->null then output should be 3.

class Node {
	constructor(data, next = null) {
    this.data = data;
    this.next = next;
	}
}

// Iterative solution 1.
// O(n)
function findMiddle(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    // Reached the end of linked list.
    if (fast === null) {
      // middle node
      return slow;
    }
  }
}

// Iterative solution 2 but inefficient.
// O(2n) = O(n)
function findMiddle(list) {
  let node = list.getFirst()
  let counter = 0

  // Get total # of nodes
  while (node !== null) {
    node = node.ext
    counter++
  }

  let middle = list.getFirst()
  // Move node until the middle
  for (let i = 0; i <= counter / 2; i++) {
    middle = middle.next
  }
  return middle
}
