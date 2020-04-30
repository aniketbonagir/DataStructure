// merge 2 sorted linklist and return the merge list

function mergeIterative(l1, l2) {
    let prNode = null;
    let p1 = l1;
    let p2 = l2;
    
    if(p1 == null && p2 == null) {
        return l1;
    }
    
    while(p1 != null && p2 != null) {
        if(p1.val <= p2.val) {
            prNode = p1;
            p1 = p1.next;
        } else {
            if(prNode != null) {
                prNode.next = p2;
            }
            prNode = p2;
            p2 = p2.next;
            prNode.next = p1;
        }
    }
    if(p1 == null && prNode != null) {
        prNode.next = p2;
    }
    
    if(l1 != null && l2 == null) {
        return l1;
    } else if(l1 == null && l2 != null) {
        return l2;
    } else {
        return (l1.val <= l2.val) ? l1 : l2;
    }
};

function mergeRecursive(head1, head2) {
	let result = null;
	if(head1 === null)
		return head2;
	if(head2 === null)
		return head1;
		
	if(head1.data <= head2.data) {
		result = head1;
		result.next = mergeRecursive(head1.next, head2);
	} else {
		result = head2;
		result.next = mergeRecursive(head2.next, head1);
	}
	return result;
}