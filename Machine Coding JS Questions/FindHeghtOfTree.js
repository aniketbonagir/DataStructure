/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Iterative
var maxDepth = function(root) {
    let level = 0;
    let que = [];
    que.push(root);
    que.push(null);
    if(root == null) {
        return 0;
    }
    
    while(que.length > 0) {
        root = que.shift();
        if(root == null) {
            if(que.length > 0) {
                que.push(null)
            }
            level++;
        } else {
            if(root.left != null) {
                que.push(root.left)
            }
            if(root.right != null) {
                que.push(root.right)
            }
        }
    }
    return level;
};

/* Recursive

var maxDepth = function(root) {
    let leftHt = null, rightHt = null;
    if(root != null) {
        leftHt = maxDepth(root.left);
        rightHt = maxDepth(root.right);
        if(leftHt > rightHt) {
            return leftHt+1;
        } else {
             return rightHt+1;
        }
        
    } else {
        return 0;
    }
};
*/