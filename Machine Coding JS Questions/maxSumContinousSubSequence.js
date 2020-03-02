/*
Maximum Value continous Subsequence or Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.
 Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6. */

var maxSubArray = function(nums) {
    let maxSum = 0;
    let sumEndingHere = 0;
    let postive = false;
    let negSum = -Infinity;
    for(let i=0; i< nums.length; i++) {
        if (nums[i] >= 0) {
            postive = true;
            negSum = nums[i];
        } else {
            if(negSum < nums[i]) {
                negSum = nums[i];
            }
        }
    }
    if(postive) {
        for(let i=0 ;i < nums.length;i++) {
            /*
            M[i] = Max{
                M[i-1] + A[i] // either extend the sum by adding A[i]
                0  // start a new window with one element in A[i]
            }
            
            */
            sumEndingHere = Math.max(sumEndingHere + nums[i], 0);
            if(maxSum < sumEndingHere) {
                maxSum = sumEndingHere;
            }
        }
    } else {
        maxSum = negSum;
    }
    
    return maxSum
    
};

function kadanesAlgorithm(array) {
  // Write your code here.
    let maxEndingHere = array[0];
    let maxSoFar = array[0];
    for(let i = 1; i < array.length; i++) {
        maxEndingHere = Math.max(array[i], maxEndingHere + array[i]);
        maxSoFar = Math.max(maxEndingHere, maxSoFar);
    }
    return maxSoFar;
}