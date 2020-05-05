// Preorder Traversal Binary tree


var preorderTraversal = function(root) {
    let final = [];
    let stack = [];
    while(1) {
        while(root) {
            final.push(root.val);
            stack.push(root);
            root = root.left;
        }
        if(!stack.length)
            break;
        root = stack.pop();
        root = root.right;
    }
    return final;
};

// Recursive
var preorderTraversal1 = function(root) {
    let final = [];
    const helper = (node) => {
        if(!node)
            return;
        final.push(node.val);
        helper(node.left);        
        helper(node.right);
    }
    helper(root);
    return final;
};