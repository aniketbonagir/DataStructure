/*
Maximum Subset Sum With No Adjacent Elements
Write a function that takes in an array of positive integers and returns an integer representing the
maximum sum of non-adjacent elements in the array. If a sum cannot be generated, the function should
return 0.
Sample input: [75, 105, 120, 75, 90, 135]
Sample output: 330 (75, 120, 135)

*/

function maxSubsetSumNoAdjacent(array) {
	if(!array.length) return 0;
	if(array.length == 1) return array[0];
	
	let first = array[0];
	let second  = Math.max(array[0], array[1]);
	let i = 2;
	while(i < array.length) {
		let current = Math.max(second, first + array[i]);
		first = second;
		second = current;
		i++;
	}
	return second;
	
}