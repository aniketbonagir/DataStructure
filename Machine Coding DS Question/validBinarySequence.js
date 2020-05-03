//  Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree 
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
 * @return {string[]}
 */

var binaryTreePaths = function(root) {
    if(!root) {
        return [];
    }
    let stack = [[root, ""+root.val]];
    let paths = [];
    while(stack.length >0) {
        let [node, path] = stack.pop();
        if(!node.left && !node.right) {
            paths.push(path);
        } 
        if(node.left) {
            stack.push([node.left, `${path}->${node.left.val}`]);
        } 
        if(node.right) {
            stack.push([node.right, `${path}->${node.right.val}`]);
        }
    }
    return paths;
}


var binaryTreePaths1 = function(root) {
    let paths = [];
    
    const constructPath = (root, path) => {
        if(root) {
            path += root.val;
            if(!root.left && !root.right) {
                paths.push(path);
            } else {
                path += '->';
                constructPath(root.left, path);
                constructPath(root.right, path)
            }
        }
    }
    constructPath(root, "");
    return paths;
    
};