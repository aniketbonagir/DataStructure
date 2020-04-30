/* Happy Number
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1


*/

var isHappy = function(n) {
    let res = squareDigitSum(n);
    // let set = {};
    // set[res] = true;

    while(res !== 1) {
        res = squareDigitSum(res);
        if(res == 1) {
          return true;
        } else {
          if(res === 4) {
            return false;
          }
          // set[res] = true;
        }
    }
    return true;
};
/*

var isHappy = function(n) {
    let res = squareDigitSum(n);
    let set = {};
    set[res] = true;

    while(res !== 1) {
        res = squareDigitSum(res);
        if(res == 1) {
          return true;
        } else {
          if(res in set) {
            return false;
          }
          set[res] = true;
        }
    }
    return true;
};

*/

function squareDigitSum(n) {
    let sum = 0;
    while(n) {
        let num = n % 10;
        sum += num*num;
        n = Math.floor(n / 10);
    }
    return sum;
}

/*
Approach 2
var isHappy = function(n) {
    let res = performSquareAddition(splitNumber(n));
    let set = {};
    set[res] = true;

    while(res !== 1) {
        res = performSquareAddition(splitNumber(res));
        if(res == 1) {
          return true;
        } else {
          if(res in set) {
            return false;
          }
          set[res] = true;
        }
    }
    return true;
};


function splitNumber(n) {
    let str = n.toString().split("");
    for(let i=0; i< str.length; i++) {
        str[i] = +str[i];
    }
    return str;
}

function performSquareAddition(arr) {
    let sum = Math.pow(arr[0], 2);
    for(let i=1; i< arr.length; i++) {
        sum += Math.pow(arr[i], 2);
    }
    return sum;
}

*/