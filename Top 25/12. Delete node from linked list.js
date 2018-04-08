/*
  Given a Singly Linked List, write a function to delete a given node. Your function must follow following constraints:
  1) It must accept pointer to the start node as first parameter and node to be deleted as second parameter i.e., pointer to head node is not global.
  2) It should not return pointer to the head node.
  3) It should not accept pointer to pointer to head node.

  You may assume that the Linked List never becomes empty.
*/
function deleteNode(head, deleteNode) {
  if (head === deleteNode) {
    if (head.next === null) {
      // list never become empty
      return false
    }
    head = head.next
    return true
  }

  const node = head
  let prev = node

  while(node.next) {
    if (node === deleteNode) {
      prev.next = node.next
      return true
    }
    prev = node
    node = node.next
  }
  return false
}
