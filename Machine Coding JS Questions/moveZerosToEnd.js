/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

var moveZeroes = function(nums) {
    let i = 0, j = 0;
    while(j < nums.length) {
      if(nums[j] != 0) {
        nums[i++] = nums[j];
      }
      j++;
    } 

    while(i < nums.length) {
      nums[i++] = 0;
    }
    return nums;
};