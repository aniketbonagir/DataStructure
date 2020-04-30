/* Maximum size square sub-matrix with all 1s
Given a binary matrix, find out the maximum size square sub-matrix with all 1s.
*/

function myFunction() {
    
    let matrix = [
        [0,1,1,0,1],
        [1,1,0,1,0],
        [0,1,1,1,0],
        [1,1,1,1,0],
        [1,1,1,1,1],
        [0,0,0,0,0]
    ];
    let res = findMartixSquareWithOne(matrix);
    console.table(res);
}

function findMartixSquareWithOne(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let max_size, max_i, max_j;
    let L = new Array(m).fill(0);
    L = L.map(() => new Array(n).fill(0));

    // copy the 1st column elements
    for(let i =0; i< m; i++) {
        L[i][0] = matrix[i][0];
    }
    // copy the 1st row elements
    for(let i =0; i< n; i++) {
        L[0][1] = matrix[0][i];
    }

    for(let i=1; i<m; i++) {
        for(let j=1; j< n; j++) {
            if(matrix[i][j] == 1) {
                L[i][j] = Math.min(L[i][j-1], L[i-1][j-1], L[i-1][j]) + 1;
            } else {
                L[i][j] = 0;
            }
        }
    }
    max_size = L[0][0];
    max_i = 0;
    max_j = 0;

    for(let i=0; i<m; i++) {
        for(let j=0; j< n; j++) {
            if(L[i][j] > max_size) {
                max_size = L[i][j];
                max_j = j;
                max_i = i;
            } 
        }
    }

    let display = new Array(max_size).fill(1);
    display = display.map(() => new Array(max_size).fill(1));

    return display;
}