// Linked List Cycle II Leetcode
/*
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.
/*

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let ptr1=head, ptr2 = head;
    
    ptr2 = intersect(ptr1, ptr2);
    if(ptr2 == null)
        return null;
    ptr1 = head;
    while(ptr1 !== ptr2) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    if(ptr1 == ptr2)
        return ptr1;
    return null;
    
};

function intersect(ptr1, ptr2) {
    while(ptr1 != null && ptr1.next != null) {
        ptr1 = ptr1.next.next;
        ptr2 = ptr2.next;
        if(ptr1 === ptr2)
            return ptr1;
    }
    return null;
}