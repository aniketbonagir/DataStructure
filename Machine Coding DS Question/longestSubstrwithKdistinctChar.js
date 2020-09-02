// Longest Substring with At Most K Distinct Characters

/*
Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.
*/


var lengthOfLongestSubstringKDistinct = function(s, k) {
    let n = s.length;
    if(n*k == 0)
        return 0;
    
    let left = 0;
    let right = 0;
    let hash = {};
    let max = 1;
    while(right < n) {
        if(Object.keys(hash).length <= k) {
            hash[s[right]] = right;
            right++;
        }
        
        if(Object.keys(hash).length > k) {
            let min_Idx = Math.min(...Object.values(hash));
            delete hash[s[min_Idx]];
            left = min_Idx + 1;
        }
        max = Math.max(max, right - left);
    }
    return max;
};