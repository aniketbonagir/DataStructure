// Peak Index in a Mountain Array
// Input: [0,2,1,0]
// Output: 1


// O(logn)
var peakIndexInMountainArray = function(A) {
    let low = 0, high = A.length-1;
    while(low <= high) {
        let mid = Math.floor(low + (high - low)/2);
        
        if(A[mid] > A[mid-1] && A[mid] > A[mid+1]) {
            return mid;
        } else if(A[mid-1] < A[mid] && A[mid] < A[mid+1]) {
            low = mid;
        } else {
            high = mid;
        }
    }
};

//O(n)
var peakIndexInMountainArray1 = function(A) {
    let LongestPeak = 0;
    let index = 0;
    let newPeak = 0;
    let i =1;
    while(i < A.length-1) {
        if(A[i-1] < A[i] && A[i] > A[i+1]) {
            newPeak = A[i];
        }
        if(newPeak > LongestPeak) {
            LongestPeak = newPeak;
            index = i;
        }
        i++;
    }
    return index;
};