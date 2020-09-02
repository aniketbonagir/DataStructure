/*
Permutations II
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
/*

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function(nums) {
    const permuation = [];
    nums.sort((a,b) => a-b);
    let used = new Array(nums.length).fill(false);
    let permut = [];
	permutationHelper(nums, permuation, permut, used);
	return permuation;
};

function permutationHelper(array, permuation, permut, used) {
	if(permut.length === array.length) {
		permuation.push(permut.slice());
	} else {
		for(let j= 0; j < array.length; j++) {
            if(used[j]) continue;
            used[j] = true;
            permut.push(array[j]);
			permutationHelper(array, permuation, permut, used);
            permut.pop();
            used[j] = false;
            while(j+1 < array.length && array[j] === array[j+1]) {
                j++;
            }
		}
	}
}