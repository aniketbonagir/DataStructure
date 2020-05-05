// Inorder Traversal

// Iterative
var inorderTraversal1 = function(root) {
    let final = [];
    let stack = [];
    while(1) {
        while(root) {
            stack.push(root);
            root = root.left;
        }
        if(!stack.length)
            break;
        root = stack.pop();
        final.push(root.val);
        root = root.right;
    }
    return final;
};

// REcursive
var inorderTraversal = function(root) {
    let final = [];
    const helper = (node) => {
        if(!node)
            return;
        helper(node.left);
        final.push(node.val);   
        helper(node.right);
    }
    helper(root);
    return final;
};