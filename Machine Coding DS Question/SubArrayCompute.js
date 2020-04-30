function myFunction() {

	let res =  maxLength([1, 2, 3], 4);
    // let res2 = solution('The quick brown fox jumps over the lazy dog', 39);
    
  console.log(res);

}

function maxLength(a, k) {
    // Write your code here
    
    let len = a.length;
    let subArs = powerset(a);
    let max = 0;
    for(let i = 0; i< subArs.length; i++) {
        if((subArs[i].reduce(sum) <= k) && subArs[i].length > max ) {
            max = subArs[i].length;
        }
    }

    return max;

}

function sum(num, accmulator) {
    return num + accmulator;
}
//Create a SubArrays list for array elements
function powerset(array) {
  // Write your code here.
    let subsets = [[]];
    for(let ele of array) {
        for(let i in subsets) {
            let currentSub = subsets[i];
            subsets.push(currentSub.concat(ele));
        }
    }
    // If we want to create subarrays from a list of array element which can have a 
    // empty subarray dont perform shift operation
    subsets.shift();
    return subsets;
}
