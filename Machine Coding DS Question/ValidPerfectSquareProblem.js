// Valid Perfect Square Problem Leetcode

var isPerfectSquare = function(num) {
    if(num ==1 || num==0)
        return true;
    let low = 2, high = Math.floor(num/2);
    while(low <= high) {
        let mid = low + Math.floor((high - low)/2);
        let guss = mid * mid;
        if(guss == num) {
            return true;
        } else if(guss > num) {
            high = mid -1;
        } else {
            low = mid + 1;
        }
    }
    return false;
};
