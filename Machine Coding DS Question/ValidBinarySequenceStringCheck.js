// Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree
// Leetcode problem

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} arr
 * @return {boolean}
 */

// Approach 2 Optimise
var isValidSequence = function(root, arr) {
    
    const compare = (node, index) => {
        if(!node)
            return false;
        if(node.val === arr[index]) {
            if(index === arr.length-1)
                return (!node.left && !node.right)
            else {
                return compare(node.left, index +1) || compare(node.right, index +1);
            }
        } else {
            return false;
        }
    };
    
    return compare(root, 0);
};

// Approach 1
var isValidSequence1 = function(root, arr) {
    if(!root) {
        return false;
    }
    let paths = [];
    let stack = [[root, ""+root.val]];
    while(stack.length >0) {
        let [node, path] = stack.pop();
        if(!node.left && !node.right) {
            paths.push(path);
        }
        else {
            if(node.left) {
            stack.push([node.left, `${path}->${node.left.val}`]);
            } 
            if(node.right) {
                stack.push([node.right, `${path}->${node.right.val}`]);
            }
        }
    }
    return paths.includes(arr.join("->"))
};