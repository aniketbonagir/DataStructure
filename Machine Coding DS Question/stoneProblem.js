// Stones Problem Leetcode

function myFunction() {
    console.log(lastStoneWeight([2,7,4,1,8,1]));
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var lastStoneWeight = function(stones) {
    
    while(stones.length !== 0 && stones.length !== 1) {
        stones.sort((a,b) => a-b);
        let firstMax = stones.pop();
        let secondMax = stones.pop();
        if(secondMax == firstMax) {
            continue;
        } else {
            stones.push(firstMax-secondMax);
        }
    }
    return stones;
};