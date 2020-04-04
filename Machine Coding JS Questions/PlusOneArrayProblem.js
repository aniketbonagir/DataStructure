/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.
i/o [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
opt [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

i - [9,9]
o - [1,0,0]
*/

var plusOne = function(digits) {
    let n = digits.length;
    digits[n-1] += 1;
    let carry = digits[n-1] / 10;
    digits[n-1] =  digits[n-1] % 10;
    
    for(let i = n-2; i>=0 ; i--) {
        if(carry === 1) {
            digits[i] += 1;
            carry = digits[i] / 10;
            digits[i] =  digits[i] % 10;
        }
    }
    if(carry === 1) {
        digits.unshift(1);
    }
    
    return digits;
    
};