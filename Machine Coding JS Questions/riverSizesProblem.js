/* 
River Sizes
You are given a two-dimensional array (matrix) of potentially unequal height and width containing only
0s and 1s. Each 0 represents land, and each 1 represents part of a river. A river consists of any number
of 1s that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of
adjacent 1s forming a river determine its size. Write a function that returns an array of the sizes of all
rivers represented in the input matrix. Note that these sizes do not need to be in any particular order.
Sample input:
[
[1, 0, 0, 1, 0],
[1, 0, 1, 0, 0],
[0, 0, 1, 0, 1],
[1, 0, 1, 0, 1],
[1, 0, 1, 1, 0],
]
*/

function riverSizes(matrix) {
  // Write your code here.
    let visited = matrix.map(row => row.map(value => false));
    let sizes = [];
    for(let i=0; i< matrix.length; i++) {
        for(let j=0; j<matrix[i].length;j++) {
            if(visited[i][j]) {
                continue;
            }
            traverseNode(i, j, matrix, visited, sizes);
        }
    }
    
    return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
    let nodesToExplore = [[i, j]];
    let currRiverSize = 0;
    while(nodesToExplore.length !== 0) {
        let currentNode = nodesToExplore.pop();
        let i = currentNode[0];
        let j = currentNode[1];
        if(visited[i][j]) {
            continue;
        }
        visited[i][j] = true;
        
        if(matrix[i][j] == 0){
            continue;
        }
        currRiverSize +=1;
        
        let unvisitedNode = getUnExploredNodes(i, j, visited, matrix);
        nodesToExplore = nodesToExplore.concat(unvisitedNode);
    }
    
    if(currRiverSize > 0) {
        sizes.push(currRiverSize)
    } 
}

function getUnExploredNodes(i, j, visited, matrix) {
    let nodesToExplore = [];
    if(i > 0 && !visited[i-1][j]) {
        nodesToExplore.push([i-1, j]);
    }
    if(i < matrix.length -1 && !visited[i+1][j]) {
        nodesToExplore.push([i+1, j]);
    }
    if(j > 0 && !visited[i][j-1]) {
        nodesToExplore.push([i, j-1]);
    }
    if(j < matrix[0].length -1 && !visited[i][j+1]) {
        nodesToExplore.push([i, j+1]);
    }
    return nodesToExplore;
}
