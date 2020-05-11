// Find the Town Judge Leetcode


var findJudge = function(N, trust) {
    if(trust.length < N-1)
        return -1;
    
    let trustScore = new Array(N+1).fill(0);
    for(let [a, b] of trust) {
        trustScore[a] -=1;
        trustScore[b] +=1;
    }
    for(let i =1; i<= N; i++) {
        if(trustScore[i] == N-1)
            return i;
    }
    return -1;
};