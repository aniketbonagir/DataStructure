/*
Possible Bipartition

Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.

Each person may dislike some other people, and they should not go into the same group. 

Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.

Return true if and only if it is possible to split everyone into two groups in this way.

 

Example 1:

Input: N = 4, dislikes = [[1,2],[1,3],[2,4]]
Output: true
Explanation: group1 [1,4], group2 [2,3]
Example 2:

Input: N = 3, dislikes = [[1,2],[1,3],[2,3]]
Output: false
Example 3:

Input: N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
Output: false


*/

/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
    const graph = generateGraph(N, dislikes);
    let color = {};
    for(let node = 1; node <= N; node++) {
        if(!(node in color) && !dfs(node, color, graph)) {
            return false;
        }
    }
    return true;
};

function dfs(node, color, graph) {
    let stack = [node];
    color[node] = 0;
    while(stack.length) {
        let node = stack.pop();
        for(const vertex of graph[node]) {
            if(!(vertex in color)) {
                color[vertex] = (color[node] === 0) ? 1 : 0;
                stack.push(vertex);
            } else if(color[vertex] === color[node]) {
                return false;
            }
        }
    }
    return true;
}

function generateGraph(N, dislikes) {
    let graph = {};
    for(let i = 1; i<= N; i++ ) {
        graph[i] = []
    }
    
    for(const [v1, v2] of dislikes) {
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    return graph;
}