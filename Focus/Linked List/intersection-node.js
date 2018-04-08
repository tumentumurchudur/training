/*
  Write a program to find the node at which the intersection of two singly linked lists begins.
  A:        a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗
  B:     b1 → b2 → b3
*/

// O(N)
function findCrossNode(headA, headB) {
  let map = {}
  let runnerA = headA
  let runnerB = headB

  while(runnerA) {
      map[runnerA.val] = 1
      runnerA = runnerA.next
  }

  while(runnerB) {
      if (map[runnerB.val]) {
          return runnerB
      }
      runnerB = runnerB.next
  }
  return null
}
