/* Find the two repeating elements in a given array
You are given an array of n+2 elements. All elements of the array are in range 1 to n. And all elements occur once except two numbers which occur twice. Find the two repeating numbers.
For example, array = {4, 2, 4, 5, 2, 3, 1} and n = 5

The above array has n + 2 = 7 elements with all elements occurring once except 2 and 4 which occur twice. So the output should be 4 2.

*/


function(nums) {
    let res = nums[0];
    let size = nums.length-2;
    let x =0, y =0;
    
    for(let i =1; i < nums.length; i++) {
        res = res ^ nums[i];
    }
    
    for(let i =1; i <= size; i++) {
        res = res ^ i;
    }
    let setBit = Math.log2(res & -res)
    
    for(let i =0 ; i< nums.length; i++) {
        if(nums[i] & (1 << setBit)) {
            x = x ^ nums[i];
        } else {
            y = y ^ nums[i];
        }
    }
    
    for(let i =1 ; i<= size; i++) {
        if(i & (1 << setBit)) {
            x = x ^ i;
        } else {
            y = y ^ i;
        }
    }
    return [x, y]
};