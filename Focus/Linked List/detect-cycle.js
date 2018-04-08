// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// O(N)
function hasCycle(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// O(N)
function hasCycle(head) {
  let slow = new ListNode(0)
  let fast = new ListNode(0)

  slow.next = head
  fast.next = head

  while(fast.next && fast.next.next) {
      fast = fast.next.next
      slow = slow.next

      if (fast.val === slow.val) {
          return true
      }
  }
  return false
}
