// Search in Rotated Sorted Array

function myFunction() {
    console.log(search([4,5,6,7,0,1,2], 0));


}
// Approach 2 using Tries
var search = function(nums, target) {
    
    return BinarySearch(nums, 0 , nums.length-1, target);
    
};

function BinarySearch(arr, left, right, data) {
    let mid = left + Math.floor((right - left)/2);
    if(left > right) {
        return -1
    }
    if(data === arr[mid])
        return mid;
    else if(arr[left] <= arr[mid]) {
        if(data >= arr[left] && data <= arr[mid]) {
            return BinarySearch(arr, left, mid-1, data);
        } else {
            return  BinarySearch(arr, mid+1, right, data);
        }
    } else {
        if(data >= arr[mid] && data <= arr[right]) {
            return  BinarySearch(arr, mid+1, right, data);
        } else {
            return BinarySearch(arr, left, mid-1, data);
        }
    }
}