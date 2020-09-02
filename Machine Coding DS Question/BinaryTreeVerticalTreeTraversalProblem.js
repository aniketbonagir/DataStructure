// Binary Tree Vertical Order Traversal - Leetcode


var verticalOrder = function(root) {
    if(!root) return [];
    let hash = {};
    let que = [[root, 0]];
    let minCol =0, maxCol = 0;
    let final =[];
    while(que.length) {
        const [node, column] = que.shift();
        if(node !== null) {
            if(!(column in hash)) {
                hash[column] = [node.val];
            } else {
                hash[column].push(node.val);
            }
            
            minCol = Math.min(column, minCol);
            maxCol = Math.max(column, maxCol);
            
            if(node.left)
                que.push([node.left, column-1]);
            if(node.right)
                que.push([node.right, column+1])
        }
    }
    for(let col = minCol; col <= maxCol; col++)
        final.push(hash[col]);
    return final;
};