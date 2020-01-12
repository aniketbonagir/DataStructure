/* Reverse the Linked list in pairs
inp - 1 -> 2 -> 3 -> 4 -> x
opt - 2 -> 1 -> 4 -> 3 -> x
*/

function reverseRecursive(head) {
	let tmp;
	if(head == null || head.next == null) {
		return
	} else {
		tmp = head.next;
		head.next = tmp.next;
		tmp.next = head;
		head = tmp;

		head.next.next = reverseRecursive(head.next.next);
		return head;
	}
}

function reverseIterative(head) {
	let tmp1= null,
		tmp2 = null,
		current = head;

	while(current != null && current.next != null) {
		if(tmp1 !== null) {
			tmp.next.next = current.next;
		}

		tmp1 = current.next;
		current.next = current.next.next;
		tmp1.next = current;
		if(tmp2 == null) {
			tmp2 = tmp1;
		}
		current = current.next;
	}
	return tmp2;
}
