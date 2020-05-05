// Lowest Common Ancestor of a Binary Tree

var lowestCommonAncestor = function(root, p, q) {
    if(!root)
        return root;
    
    if(root.val==p.val || root.val == q.val)
        return root;
    
    let left = lowestCommonAncestor(root.left, p , q);
    let right = lowestCommonAncestor(root.right, p , q);
    if(left && right)
        return root;
    else
        return left || right;
    
};