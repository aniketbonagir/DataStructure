function myFunction() {
    
    console.log(getPermutations(
        [1, 2, 3, 4]
      ));

}

function getPermutations(array) {
  // Write your code here.
	const permuation = [];
	permutationHelper(0, array, permuation)
	return permuation;
}

function permutationHelper(index, array, permuation) {
	if(index === array.length-1) {
		permuation.push(array.slice());
	} else {
		for(let j= index; j < array.length; j++) {
			swap(index, j, array);
			permutationHelper(index + 1, array, permuation);
			swap(index, j, array);
		}
	}
}

function swap(i, j, array) {
	[array[j], array[i]] = [array[i], array[j]];
}
// Do not edit the line below.
exports.getPermutations = getPermutations;
