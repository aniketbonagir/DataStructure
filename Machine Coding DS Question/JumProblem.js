//Jump Problem Leetcode

function myFunction() {
    console.log(canJump([2,0]))
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let numOfElemVisted = 0;
    let currIndex = 0;
    while(numOfElemVisted < nums.length) {
        if(numOfElemVisted > 0 && currIndex >= nums.length-1) {
            return true;
        }
        numOfElemVisted++;
        currIndex = currIndex + getNextIndex(currIndex, nums);
    }
    return (currIndex >= nums.length-1);
};

function getNextIndex(curIndex, array) {
    let jump = array[curIndex];
    let nextIndex = jump % array.length;
    return (nextIndex >= 0) ? nextIndex : nextIndex + array.length;
}
