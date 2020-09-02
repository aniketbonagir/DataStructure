// Longest Valid Parentheses - Leetcode
/*
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"
Example 2:

Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"
*/

function myFunction() {
    
    console.log(longestValidParentheses(
        "(()"
      ));

}

// Two pointer approach, Space efficient
var longestValidParentheses = function(s) {
    let left = 0, right = 0;
    let maxLen = 0;
    for(let i =0; i< s.length; i++) {
        if(s[i] === "(") {
            left++;
        } else {
            right++;
        }
        if(left == right) {
            maxLen = Math.max(maxLen, 2*right)
        } else if(right >= left) {
            left = 0;
            right = 0;
        }
    }
    left = 0;
    right = 0;
    for(let i = s.length-1; i >= 0; i--) {
        if(s[i] === "(") {
            left++;
        } else {
            right++;
        }
        if(left == right) {
            maxLen = Math.max(maxLen, 2*left)
        } else if(left >= right) {
            left = 0;
            right = 0;
        }
    }
    return maxLen;
};


var longestValidParentheses = function(s) {
    let stack = [-1];
    let max = 0;
    
    for(let i = 0; i < s.length; i++) {
         console.log(max);
        if(s[i] === "(") {
            stack.push(i);
        } else {
            stack.pop();
            if(stack.length == 0) {
                stack.push(i);
            } else {
                max = Math.max(max, i - stack[stack.length-1]);
            }
            console.log(max);
        }
    }
    return max;
};