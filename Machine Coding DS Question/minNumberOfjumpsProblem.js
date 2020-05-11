/*
Min Number Of Jumps
You're given a non-empty array of positive integers where each integer represents the maximum number of steps you can take forward in the array. For example, if the element at index 1 is 3 , you can go from index 1 to index 2 , 3 , or 4 . Write a function that returns the minimum number of jumps needed to reach the nal index.
Note that jumping from index i to index i + x always constitutes one jump, no matter how large x is
Input - array = [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]
Opt - 4

*/


// Approch 2- Fastest
function minNumberOfJumps(array) {
  // Write your code here.
	if(array.length == 1)
		return 0;
	let maxReach = array[0];
	let steps = array[0];
	let jumps = 0;
	for(let i =1; i< array.length-1; i++) {
		maxReach = Math.max(maxReach, i+ array[i]);
		steps--;
		if(steps == 0) {
			jumps += 1;
			steps = maxReach - i;
		}
	}
	return jumps + 1;
}


// Approach 1 - DP
function minNumberOfJumps(array) {
  // Write your code here.
	let result = new Array(array.length).fill(Infinity);
	result[0] = 0;
	for(let i=1; i<array.length; i++) {
		for(let j=0; j < i; j++) {
			if(array[j] + j >= i) {
				result[i] = Math.min(result[i], result[j] + 1);
			}
		}
	}
	return result[array.length-1];
}
