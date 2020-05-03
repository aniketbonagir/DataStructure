// Maximal Square Leetcode

function myFunction() {
    console.log(maximalSquare(
        [["0","1"]]
      ));


}

var maximalSquare = function(matrix) {
    let L = new Array(matrix.length).fill(0).map(x => new Array(matrix[0].length).fill(0));
    for(let i = 0; i < matrix[0].length;i++)
        L[0][i] = +matrix[0][i]; // Filling 1st row
    
    for(let i = 0; i < matrix.length;i++)
        L[i][0] = +matrix[i][0] // filling 1st colum
    
    for(let i=1; i<matrix.length;i++) {
        for(let j=1; j<matrix[0].length; j++) {
            if(matrix[i][j] == 1) {
                L[i][j] = Math.min(L[i][j-1], L[i-1][j],L[i-1][j-1]) + 1;
            }
        }
    }
    
    let max = L[0][0];
    for(let i=0; i<matrix.length;i++) {
        for(let j=0; j<matrix[0].length; j++) {
            if(max < L[i][j])
                max = L[i][j]
        }
    }
    return max*max;
};