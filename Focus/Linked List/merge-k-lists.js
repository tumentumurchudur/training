// Merge K sorted lists into a single list
// lists is an array of linked lists
// O(nLogn) because sorting costs O(nlogn)
// Brute Force
// O(nxm)
function mergeKLists(self, lists) {
  self.nodes = []
  let head = null
  let point = head

  for (let list of lists) {
    while (list.node) {
      self.nodes.push(list.node)

      list.node = list.node.next
    }
  }

  for (let val of self.nodes.sort()) {
    point.next = new Node(val)
    point = point.next
  }
  return head.next
}
