// Construct BST from preorder traversal

function myFunction() {
    console.log(bstFromPreorder([8,5,1,7,10,12]));


}

//  Approach 1 -  T -O(N), S - O(1)
var bstFromPreorder = function(preorder) {
    let stack = [];
    let root = new TreeNode(preorder[0]);
    stack.push(root);
    
    for(let i =1; i<preorder.length; i++) {
        let node = stack[stack.length-1];
        let child = new TreeNode(preorder[i]);
        
        while(stack.length > 0 && stack[stack.length-1].val < child.val) {
            node = stack.pop();
        }
        if(node.val < child.val) {
            node.right = child;
        } else {
            node.left = child;
        }
        stack.push(child);
    }
    return root;
};

// Approach 2 -  T -O(N), S - O(N)
var bstFromPreorder1 = function(preorder) {
    let idx = 0;
    let n = preorder.length;
    
    const helper = (lower, upper) => {
        if(idx === n)
            return null;
        
        let val = preorder[idx];
        
        if(val < lower || val > upper) 
            return null;
        
        idx++;
        let root = new TreeNode(val);
        root.left = helper(lower, val);
        root.right = helper(val, upper);
        return root;
    };
    
    return helper(-Infinity, Infinity);
};



function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}