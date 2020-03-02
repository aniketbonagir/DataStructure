/*
Min Number Of Coins For Change
Given an array of positive integers representing coin denominations and a single non-negative integer
representing a target amount of money, implement a function that returns the smallest number of coins
needed to make change for that target amount using the given coin denominations. Note that an
unlimited amount of coins is at your disposal. If it is impossible to make change for the target amount,
return -1.
Sample input: 7, [1, 5, 10]
Sample output: 3 (2x1 + 1x5
*/
// T - O(nd)
function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.
	let waysAr = new Array(n+1).fill(Infinity);
	waysAr[0] = 0;
	for(let deno of denoms) {
		for(let amount = 0 ; amount < n+1; amount++) {
			if(deno <= amount) {
				waysAr[amount] = Math.min(waysAr[amount], waysAr[amount-deno] + 1);
			}
		}
	}
	return waysAr[n] !== Infinity ? waysAr[n] : -1;
}