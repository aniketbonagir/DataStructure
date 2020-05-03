// Word Search II Leetcode

function myFunction() {
    console.log(findWords(
        [
          ["o","a","a","n"],
          ["e","t","a","e"],
          ["i","h","k","r"],
          ["i","f","l","v"]
        ],
        ["oath","pea","eat","rain"]
      ));


}

var findWords = function(board, words) {
    const wordKey = "#";
    let trie = {};
    let rows = board.length;
    let cols = board[0].length;
    let final = [];
    let direction = [[-1,0],[1,0],[0,-1],[0,1]];
    
    const generateTrie = () => {
        for(let word of words) {
            let node  = trie;
            for(let ch of word) {
                if(!(ch in node)) {
                    node[ch] = {};
                } 
                node = node[ch];
            }
            node[wordKey] = word;
        }
    };
    
    const backTracking = (row, col, parent) => {
        let letter = board[row][col];
        let curNode = parent[letter];
        
        if(curNode[wordKey]) {
            final.push(curNode[wordKey]);
        }
        
        board[row][col] = "$";
        
        for(let [rowOffset, colOffset] of direction) {
            let r= row + rowOffset, c = col + colOffset;
            if(r >= rows || r < 0 || c >= cols || c < 0) {
                continue;
            } else if(!(board[r][c] in curNode)) {
                continue;
            } else {
                backTracking(r, c, curNode);
            }
        }
        board[row][col] = letter;
    }
    
    generateTrie();
    
    for(let i=0; i<rows;i++) {
        for(let j=0; j<cols;j++) {
            if(board[i][j] in trie) {
                backTracking(i, j, trie);
            }
        }
    }
    return final;
};