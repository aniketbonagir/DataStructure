/*
Max Sum Increasing Subsequence
Given an non-empty array of integers, write a function that returns an array of length 2. The rst
element in the output array should be an integer value representing the greatest sum that can be
generated from a strictly-increasing subsequence in the array. The second element should be an array
of the numbers in that subsequence. A subsequence is dened as a set of numbers that are not
necessarily adjacent but that are in the same order as they appear in the array. Assume that there will
only be one increasing subsequence with the greatest sum

Sample input: [10, 70, 20, 30, 50, 11, 30]
Sample output: [110, [10, 20, 30, 50]]

*/

function maxSumIncreasingSubsequence(array) {
  // Write your code here.
	let sequence = new Array(array.length);
	let sum = [...array];
	let maxSumIdx = 0;
	for(let i=0; i<array.length; i++) {
		let currentNum = array[i];
		for(let j=0; j<i; j++) {
			let otherNum = array[j];
			if(otherNum < currentNum && currentNum + sum[j] >= sum[i]) {
				sum[i] = sum[j] + currentNum;
				sequence[i] = j;
			}
		}
		if(sum[i] > sum[maxSumIdx]) {
			maxSumIdx = i;
		}
	}
	
	return [sum[maxSumIdx], buildSequence(array, sequence, maxSumIdx)]
}

function buildSequence(array, sequence, curIdx) {
	let seq = [];
	while(curIdx != undefined) {
		seq.unshift(array[curIdx]);
		curIdx = sequence[curIdx];
	}
	return seq;
}