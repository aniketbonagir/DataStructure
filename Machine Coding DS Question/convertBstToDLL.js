/*
Convert Binary Search Tree to Sorted Doubly Linked List
Convert a Binary Search Tree to a sorted Circular Doubly-Linked List in place.

You can think of the left and right pointers as synonymous to the predecessor and successor pointers in a doubly-linked list. For a circular doubly linked list, the predecessor of the first element is the last element, and the successor of the last element is the first element.

We want to do the transformation in place. After the transformation, the left pointer of the tree node should point to its predecessor, and the right pointer should point to its successor. You should return the pointer to the smallest element of the linked list.

 Input: root = [4,2,5,1,3]
 Output: [1,2,3,4,5]

*/


/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if(root == null) return null;
    let first, last;
    
    const helper = (node) => {
        if(node != null) {
            helper(node.left);
            
            if(last != null) {
                last.right = node;
                node.left = last;
            } else {
                first = node;
            }
            last = node;
            helper(node.right);
        }
    }
    helper(root);
    last.right = first;
    first.left = last;
    return first;
};