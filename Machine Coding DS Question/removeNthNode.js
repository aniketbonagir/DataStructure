/**
 * Given a linked list, remove the n-th node from the end of list and return its head.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
      this.val = val;
      this.next = null;
 }
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let ptr1 = dummy;
    let ptr2 = dummy;
    let i =0;
    if(head.next != null) {
        while(i <= n && ptr1 != null) {
            ptr1 = ptr1.next;
            i++;
        }
        
        while(ptr1 != null) {
            ptr1 = ptr1.next;
            ptr2 = ptr2.next;
        }
        ptr2.next = ptr2.next.next;
    } else {
        return null;
    }
    
    return dummy.next;
};