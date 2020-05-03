// Product of Array Except Self Leetcode

// Approach 1 with using 2 Arrays
var productExceptSelf = function(nums) {
    let L = new Array(nums.length-1).fill(0);
    let R = new Array(nums.length-1).fill(0);
    let answer = [];
    L[0] = 1;
    R[nums.length-1] = 1;
    
    for(let i=1; i<nums.length;i++) {
        L[i] = L[i-1]*nums[i-1];
    }
    
    for(let i=nums.length-2; i >= 0; i--) {
        R[i] = R[i+1]*nums[i+1]
    }
    
    for(let i=0; i<nums.length; i++) {
        answer.push(L[i] * R[i]);
    }
    return answer;
    
};


// Approach 2 - Optimise space Complexity
var productExceptSelf = function(nums) {
    let ans = new Array(nums.length-1).fill(0);
    ans[0] = 1;
    
    for(let i =1; i<nums.length; i++) {
        ans[i] = ans[i-1] * nums[i-1];
    }
    let R = 1;
    for(let j= nums.length-1; j >= 0; j--) {
        ans[j] = ans[j] * R;
        R = nums[j] * R;
    }
    return ans;
}
