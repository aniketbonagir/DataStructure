/*
 Find K-th Smallest Pair Distance
Given an integer array, return the k-th smallest distance among all the pairs. The distance of a pair (A, B) is defined as the absolute difference between A and B.

Example 1:
Input:
nums = [1,3,1]
k = 1
Output: 0 
Explanation:
Here are all the pairs:
(1,3) -> 2
(1,1) -> 0
(3,1) -> 2
Then the 1st smallest distance pair is (1,1), and its distance is 0.


Time Complexity: O(N \log{W} + N \log{N})O(NlogW+NlogN), where NN is the length of nums, and WW is equal to nums[nums.length - 1] - nums[0]. The \log WlogW factor comes from our binary search, and we do O(N)O(N) work inside our call to possible (or to calculate count in Java). The final O(N\log N)O(NlogN) factor comes from sorting.

Space Complexity: O(1)O(1). No additional space is used except for integer variables.
*/

var smallestDistancePair = function(nums, k) {
    nums.sort((a,b) => a-b);
    let low = 0;
    let high = nums[nums.length-1] - nums[0];
    while(low < high) {
        let mid = Math.floor((low + high)/2);
        let count = 0, left = 0;
        for(let right = 0; right < nums.length; right++) {
            while(nums[right] - nums[left] > mid)
                left++;
            // number of pairs nums[right] - nums[left] <= mid
            count += right - left;
        }
        if(count >= k)
            high = mid;
        else
            low = mid + 1;
    }
    return low;
};