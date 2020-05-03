//  Minimum Path Sum

function myFunction() {
    console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));


}
// Approach 2 using Tries
var minPathSum = function(grid) {
    let L = new Array(grid.length).fill(0).map(x => new Array(grid[0].length).fill(0));
    
    for(let i=0; i < L.length; i++) {
        for(let j=0; j< L[0].length;j++) {
            L[i][j] = grid[i][j];
            let up = Infinity;
            let left = Infinity;
            if(i>0) {
              up = L[i-1][j];
            }
            if(j>0) {
              left = L[i][j-1];
            }
            if(up != Infinity && left != Infinity) {
              L[i][j] += Math.min(up, left);
            } else if(up != Infinity) {
              L[i][j] += up;
            } else if(left != Infinity) {
              L[i][j] += left;
            }
            
        }
    }
    return L[grid.length-1][grid[0].length-1];
};