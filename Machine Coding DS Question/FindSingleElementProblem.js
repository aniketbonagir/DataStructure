// find Single Element in a Sorted Array
// Leetcode
/*
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.
*/

function myFunction() {
    console.log(singleNonDuplicate(
       [1,1,4,4,5,5,6,8,8]
      ));


}

var singleNonDuplicate = function(nums) {
    let low = 0;
    let high = nums.length-1;
    while(low < high) {
        let mid = Math.floor(low + (high-low)/2);
        let ishalvesEven = (high - mid) % 2 == 0;
        if(nums[mid] == nums[mid+1]) {
            if(ishalvesEven) {
                low = mid + 2;
            } else {
                high = mid -1;
            }
        } else if(nums[mid] == nums[mid-1]) {
            if(ishalvesEven) {
                high = mid -2;
            } else {
                low = mid + 1;
            }
        } else {
            return nums[mid];
        }
    }
    return nums[low];
};

var singleNonDuplicate1 = function(nums) {
    let res = 0;
    for(let num of nums) {
        res = res ^ num;
    }
    return res;
};