// Serialize and Deserialize Binary Tree


var serialize = function(root) {
    let final = [];
    
    const helper = (node) => {
        if(!node) {
            final.push(null);
            return;
        }            
        
        final.push(node.val);
        helper(node.left);
        helper(node.right);
    }
    helper(root);
    return final;
    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const helper = () => {
        if(data[0] == null) {
            data.shift();
            return null;
        }
            
        let root = new TreeNode(data.shift());
        root.left = helper();
        root.right = helper();
        return root;
        
    }
    return helper();
};

function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
 }