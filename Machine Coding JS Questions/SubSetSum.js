/* Given a set of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum. */

function myFunction() {
    
    let res = checkMaxSumSubsetDp([2, 4, 6, 10], 14);
    console.log(res)
}

function checkMaxSumSubset(array, target) {
    return checkMaxSumSubsetHelper(array, target, array.length-1);
}

function checkMaxSumSubsetHelper(array, sum, i) {
    if(sum == 0) {
        return 1;
    } else if(sum < 0) {
        return 0;
    } else if( i< 0) {
        return 0
    } else {
        if(sum < array[i]) {
            return checkMaxSumSubsetHelper(array, sum, i-1);
        } else {
            return checkMaxSumSubsetHelper(array, sum-array[i], i-1) + checkMaxSumSubsetHelper(array, sum, i-1);
        }
    }
}

// Optimse Solution T(n) - O(n*Sum)
function checkMaxSumSubsetDp(array, target) {
    let cache ={};
    return checkMaxSumSubsetHelperDp(array, target, array.length-1, cache);
}

function checkMaxSumSubsetHelperDp(array, sum, i, cache) {
    let key = `${sum}:${i}`;
    if(key in cache) {
        return cache[key];
    } else if(sum == 0) {
        return 1;
    } else if(sum < 0) {
        return 0;
    } else if( i< 0) {
        return 0
    } else {
        if(sum < array[i]) {
            cache[key] = checkMaxSumSubsetHelper(array, sum, i-1);
        } else {
            cache[key] = checkMaxSumSubsetHelper(array, sum-array[i], i-1) + checkMaxSumSubsetHelper(array, sum, i-1);
        }
        return cache[key];
    }
}