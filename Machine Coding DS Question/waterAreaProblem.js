// Trapping Rain Water // Water Area problem
// leetcode

var trap = function(heights) {
    let leftMax = 0;
	let maxs = [];
	for(let ht of heights) {
		maxs.push(leftMax);
		leftMax = Math.max(leftMax, ht);
	}
	let rightMax = 0;
	for(let i = heights.length-1; i>= 0; i--) {
		let ht = heights[i];
		let minHt = Math.min(rightMax, maxs[i]);
		if(ht < minHt) {
			maxs[i] = minHt - ht;
		} else {
			maxs[i] = 0;
		}
		rightMax = Math.max(rightMax, ht);
	}
	return maxs.reduce((a,b) => a + b, 0);
};