/*
Maximum Sum Circular Subarray - Leetcode
Given a circular array C of integers represented by A, find the maximum possible sum of a non-empty subarray of C.

Here, a circular array means the end of the array connects to the beginning of the array.  (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)

Also, a subarray may only include each element of the fixed buffer A at most once.  (Formally, for a subarray C[i], C[i+1], ..., C[j], there does not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)

Input: [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3
/*

// Approach 1
var maxSubarraySumCircular = function(A) {
    let sum = A.reduce((cur, num) => {return cur + num}, 0);
    let ans1 = kadane(A, 0 , A.length-1, 1);
    let ans2 = sum + kadane(A, 1 , A.length-1, -1);
    let ans3 = sum + kadane(A, 0 , A.length-2, -1);
    return Math.max(ans1, Math.max(ans2, ans3));
};

function kadane(arr, start, end , sign) {
    let ans = -Infinity;
    let curSum = -Infinity;
    for(let i = start; i<= end; i++) {
        curSum = sign * arr[i] + Math.max(curSum, 0);
        ans = Math.max(ans, curSum)
    }
    return ans;
}