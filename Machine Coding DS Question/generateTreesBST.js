// Generate BST N trees

function myFunction() {
    console.log(generateTrees(3));
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var generateTrees = function(n) {
    if(n==0) {
        return [new TreeNode()];
    }
    return helper(1, n);
};

function helper(start, end) {
    let trees = [];
    if(start > end)
        return [null];
    
    for(let i=start; i<=end;i++) {
        let leftTrees = helper(start, i-1);
        let rightTrees = helper(i+1, end);
        
        for(let l of leftTrees) {
            for(let r of rightTrees) {
                let curNode = new TreeNode(i);
                curNode.left = l;
                curNode.right = r
                trees.push(curNode);
            }
        }
    }
    return trees;
}


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}