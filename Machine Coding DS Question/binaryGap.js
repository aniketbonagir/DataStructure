/*

A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

    function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..2,147,483,647].

Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited. 
test for = 1041, 15, 32, 328, 1162, 51712, 66561, 805306373, 1610612737



*/

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let binNum = N.toString(2);
    let gapAr = [];
    let sum = 0;
    let start = false
    for(let i =0; i< binNum.length; i++) {
            if(!start && binNum[i] == 1 && binNum[i+1] == 0) {
                start = true;
            } else if(start) {
                if(binNum[i] == 0) {
                sum++;
                } else if(binNum[i] == 1) {
                    gapAr.push(sum);
                    sum = 0;
                    if(binNum[i+1] == 1) {
                        start = false;
                    }
                }
            }
            
        }
        gapAr.sort((a, b) => a-b);
        return gapAr.length > 0 ? gapAr[gapAr.length-1]: 0;
    
}