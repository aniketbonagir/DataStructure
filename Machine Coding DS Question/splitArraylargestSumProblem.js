/*
Split Array Largest Sum

Given an array which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays. Write an algorithm to minimize the largest sum among these m subarrays.

Note:
If n is the length of array, assume the following constraints are satisfied:

1 ≤ n ≤ 1000
1 ≤ m ≤ min(50, n)
Examples:

Input:
nums = [7,2,5,10,8]
m = 2

Output:
18

Explanation:
There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18
/*

/*
Complexity Analysis
Time complexity : O(n * log(sum of array))O(n∗log(sumofarray)). The binary search costs O(log(sum of array))O(log(sumofarray)), where sum of array is the sum of elements in nums. For each computation of F(x), the time complexity is O(n)O(n) since we only need to go through the whole array.

Space complexity : O(n)O(n). Same as the Brute Force approach. We only need the space to store the array.
*/

var splitArray = function(nums, m) {
    let l = 0, r= 0;
    for(let num of nums) {
        r += num;
        if(l < num)
            l = num;
    }
    let ans = r;
    while(l <= r) {
        let mid = Math.floor((l + r)/2);
        let sum =0;
        let cnt = 1;
        for(let num of nums) {
            if(sum + num > mid) {
                cnt++;
                sum = num;
            } else {
                sum += num;
            }
        }
        if(cnt <= m) {
            ans = Math.min(ans, mid);
            r = mid -1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
};