/* 
Knapsack Problem
You are given an array of arrays. Each subarray in this array holds two integer values and represents an
item; the rst integer is the item's value, and the second integer is the item's weight. You are also given
an integer representing the maximum capacity of a knapsack that you have. Your goal is to t items in
your knapsack, all the while maximizing their combined value. Note that the sum of the weights of
the items that you pick cannot exceed the knapsack's capacity. Write a function that returns the maximized
combined value of the items that you should pick, as well as an array of the indices of each item picked.
Assume that there will only be one combination of items that maximizes the total value in the knapsack.
Sample input: [[1, 2], [4, 3], [5, 6], [6, 7]], 10
Sample output: [10, [1, 3]]

*/

function knapsackProblem(items, capacity) {
  // Write your code here.
	let knapSack = new Array(items.length+1).fill(0);
	knapSack = knapSack.map(x => new Array(capacity+1).fill(0));
	
	for(let i =1; i<= items.length; i++) {
		let currentItemVal = items[i-1][0];
		let currentItemWt = items[i-1][1];
		for(let c=0; c <= capacity; c++) {
			if(currentItemWt > c) {
				knapSack[i][c] = knapSack[i-1][c];
			} else {
				knapSack[i][c] = Math.max(knapSack[i-1][c], knapSack[i-1][c-currentItemWt] + currentItemVal)
			}
		}
	}
	return [knapSack[items.length][capacity], getItemsIndexPicked(knapSack, items)];
}

function getItemsIndexPicked(knapSack, items) {
	let indexs = [];
	let i = knapSack.length -1;
	let c = knapSack[0].length -1;
	
	while(i>0) {
		if(knapSack[i][c] === knapSack[i-1][c]) {
			i--;
		} else {
			indexs.push(i-1);
			c = c-items[i-1][1];
			i--;
		}
		if (c==0)
			break;
	}
	return indexs.reverse()
}
