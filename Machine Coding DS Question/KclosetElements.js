// Find K Closest Elements leetcode

function myFunction() {
    console.log(findClosestElements(
        [1,1,1,10,10,10],
        1,
        9
      ));


}

/*
Time complexity : O(\log n +k)O(logn+k). O(\log n)O(logn) is for the time of binary search, 
while O(k)O(k) is for shrinking the index range to k elements.

Space complexity : O(k)O(k). It is to generate the required sublist.

*/

var findClosestElements = function(arr, k, x) {
    let n = arr.length;
    if(x <= arr[0]) {
        return arr.slice(0, k);
    } else if(x >= arr[n-1]) {
        return arr.slice(n-k, n);
    }
    let index = binarySearch(arr, x);
    if(index < 0)
        index = -index-1;
    let low = Math.max(0, index-k-1), high = Math.min(n-1, index+k-1);
    
    while(high-low > k-1) {
        if(low < 0 || (x-arr[low] <= arr[high] - x)) {
            high--;
        } else if(high > n-1 || (x-arr[low] > arr[high] - x)){
            low++;
        }
    }
    return arr.slice(low, high+1);
    
};

function binarySearch(arr, target) {
    let high = arr.length;
    let low = 0;
    let closest= -1, minDiff = Infinity;
    while(low < high) {
        let mid = low + Math.floor((high-low)/2);
        if(Math.abs(arr[mid] - target) < minDiff) {
          minDiff = Math.abs(arr[mid] - target);
          closest = mid;
        }
        if(arr[mid] == target) {
            return mid;
        } else if(target > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid -1;
        }
    }
    return closest;
}