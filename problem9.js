/* This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest 
sum of non-adjacent numbers. 
Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, 
since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, 
since we pick 5 and 5.

Sample input: [75, 105, 120, 75, 90, 135]
330 (75, 120, 135)

*/


function maxSubsetSumNoAdjacent(array) {
	if(!array.length) return 0;

	if(array.length === 1) return array[0];

	let first = array[0];
	let second = Math.max(array[0], array[1]);
	let i = 2;
	while(i < array.length) {
		let current = Math.max(second, first + array[i]);
		first = second;
		second = current
		i++;
	}

	return second;
}