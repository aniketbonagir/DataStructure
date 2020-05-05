// Find Minimum in Rotated Sorted Array

var findMin = function(nums) {
    if(nums.length == 1) {
        return nums[0];
    }
    let low = 0;
    let high = nums.length-1;
    
    if(nums[0] < nums[high]) {
        return nums[0]
    }
    
    while(low <= high) {
        let mid = low + Math.floor((high-low)/2);
        if(nums[mid] > nums[mid+1]) {
            return nums[mid+1];
        }else if(nums[mid-1] > nums[mid]) {
            return nums[mid];
        } else if(nums[0] < nums[mid]) {
            low = mid +1;
        } else {
            high = mid -1;
        }
       
    }
    return -1;
};