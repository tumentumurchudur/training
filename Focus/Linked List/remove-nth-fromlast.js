// --- Directions
// Given a linked list and integer n, remove the element n
// spaces from the last node in the list.  Do not call the
// 'size' method of the linked list. Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2) // a, b, d

function ListNode(val) {
	this.val = val
	this.next = null
}

function removeNthfromLast(list, n) {
	let start = new ListNode(0);
	let slow = start;
	let fast = start;

	slow.next = head;
	fast.next = head

	// Leave n # of gaps between slow and fast.
	// that is why advance n + 1 times.
	while(n >= 0) {
		fast = fast.next
		n--
	}

	// Move fast to the end, maintaining the gap.
	// Advance all the way to the end.
	while(fast) {
		slow = slow.next;
		fast = fast.next;
	}

	// Skip the desired node
	slow.next = slow.next.next;

	return start.next;
}
