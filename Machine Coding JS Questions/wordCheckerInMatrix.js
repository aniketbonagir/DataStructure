// Check if a word exists in a matrix or not. A word can be matched in 8 directions at any point.

function myFunction() {
    let array = [
        ["A", "C", "P", "R", "C"],
        ["X", "S", "O", "P", "C"],
        ["V", "O", "V", "N", "I"],
        ["W", "G", "F", "M", "N"],
        ["Q", "A", "T", "I", "T"]
    ];
    let res = findMatch(array, "MICROSOFT");
    console.log(res)
}

function findMatch(mat, string) {
    return findMatchHelper(mat, string, 0, 0, mat.length, mat[0].length, 0)
}

function findMatchHelper(mat, string, x, y, rows, cols, level) {
    if(level === string.length) {
        return true;
    }

    if(x < 0 || y < 0 || x >= rows || y >= cols) {
        return false; // boundary condition
    }

    if(mat[x][y] === "#") {
        return false;
    }

    if(mat[x][y] != string[level] && level == 0) {
        if(x < (rows - 1)) { // next element in the same row
            return findMatchHelper(mat, string, x+1, y, rows, cols, level);
        } else if(y < (cols -1)) { // first element from the same column
            return findMatchHelper(mat, string, 0, y+1, rows, cols, level);
        }
    } else if(mat[x][y] === string[level]) {
        let tmp = mat[x][y];
        mat[x][y] = "#";
        let res = false;
        res = (x > 0 ? findMatchHelper(mat, string, x-1, y, rows, cols, level+1) : false) || // left
            (res = (x < (rows -1)) ? findMatchHelper(mat, string, x+1, y, rows, cols, level +1): false) || // right
            (res = (y > 0 ) ? findMatchHelper(mat, string, x, y-1, rows, cols, level +1): false) || // up
            (res = (x < (cols -1)) ? findMatchHelper(mat, string, x, y+1, rows, cols, level +1): false) || // down
            (res = (x < (rows-1) && y < (cols-1)) ? 
            findMatchHelper(mat, string, x+1, y+1, rows, cols, level +1): false) || // diagonally down right
            (res = (x < rows-1 && y > 0) ? 
            findMatchHelper(mat, string, x+1, y-1, rows, cols, level +1): false) || // diagonally down left
            (res = (x > 0 && y < (cols-1)) ? 
            findMatchHelper(mat, string, x-1, y+1, rows, cols, level +1): false) || // diagonally up right
            (res = (x > 0 && y > 0) ?
            findMatchHelper(mat, string, x-1, y-1, rows, cols, level +1): false); // diagonally up left
        mat[x][y] = tmp;
        return res;
    }
    else
        return false;
}
