// Binary Tree Postorder Traversal

// Recrusive
var postorderTraversal1 = function(root) {
    let final = [];
    const helper = (node) => {
        if(!node)
            return;
        helper(node.left);        
        helper(node.right);
        final.push(node.val);

    }
    helper(root);
    return final;
};

// Iterative
var postorderTraversal = function(root) {
    var ret = [];
    if(!root) return ret;
    var stack = [root];
    while(stack.length > 0) {
        var e = stack[stack.length - 1];
        if(e.left) {
            stack.push(e.left);
            e.left = null;
        } else if(e.right) {
            stack.push(e.right);
            e.right = null;
        } else {
            ret.push(e.val);
            stack.pop();
        }
    }
    
    return ret;
};