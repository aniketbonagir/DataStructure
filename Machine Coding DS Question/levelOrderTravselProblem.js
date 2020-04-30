// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
var levelOrder = function(root) {
    let level = [];
    let que = [];
    if(root == null) {
        return level;
    }
    
    que.push(root, null);
    let temp = [];
    while(que.length > 0) {
        root  = que.shift();
        if(root != null) {
            temp.push(root.val);
        }
        
        if(root == null) {
            if(que.length > 0) {
                que.push(null);
            }
            level.push(temp)
            temp = [];
        } else {
            if(root.left !== null) {
                que.push(root.left);
            }
            if(root.right !== null) {
                que.push(root.right);
            }
        }
    }
    return level;
};