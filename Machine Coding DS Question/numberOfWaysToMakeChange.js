/*
Number Of Ways To Make Change
Given an array of positive integers representing coin denominations and a single non-negative integer
representing a target amount of money, implement a function that returns the number of ways to make
change for that target amount using the given coin denominations. Note that an unlimited amount of
coins is at your disposal.
Sample input: 6, [1, 5]
*/
// T - O(nd)
function numberOfWaysToMakeChange(n, denoms) {
	let waysAr = new Array(n+1).fill(0);
	waysAr[0] = 1;
  // Write your code here.
	for(let deno of denoms) {
		for(let amnt = 1; amnt < n +1; amnt++) {
			if(deno <= amnt) {
				waysAr[amnt] += waysAr[amnt - deno];
			}
		}
	}
	return waysAr[n];
}