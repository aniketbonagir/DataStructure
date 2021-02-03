/*
Contiguous Array - Leetcode
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50,000.

/*


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let countHash = {};
    countHash[0] = -1;
    let maxLen = 0;
    let count =0;
    for(let i=0; i< nums.length; i++) {
        count += (nums[i] === 1) ? 1 : -1
        
        if(count in countHash) {
            maxLen = Math.max(maxLen, (i - countHash[count]))
        } else {
            countHash[count] = i;
        }
    }
    return maxLen;
};