// Determine set can be partitioned into 2 subsets such that there sum of elements is same
function myFunction() {
    
    let res = partition([1, 5, 11, 5]);
    console.log(res);
    res = partition([1, 5, 5]);
    console.log(res)
}


function partition(array) {
    let sum = array.reduce((cum, ele) => cum + ele);

    if(sum%2 !== 0) {
        return 0;
    }

    return subsetSum(array, array.length, sum/2)
}

// Determine if there is a subset whose sum of elements is equal to given sum
function subsetSum(array, index, sum) {
    if(sum == 0) {
        return 1;
    } else if(index == 0 && sum > 0) {
        return 0;
    } else if(array[index-1] > sum) {
        return subsetSum(array, index-1, sum);
    } else {
        return subsetSum(array, index-1, sum) || subsetSum(array, index-1, sum-array[index-1]);
    }
}

// Optimise
function subSetSumDp(array) {
    let len = array.length;
    let sum = array.reduce((cum, ele) => cum + ele);

    if(sum%2 !== 0) {
        return 0;
    }

    let part = new Array((sum /2) +1).fill();
    part = part.map(() => new Array(len +1).fill(0));
    // init 1st row
    for(let i =0 ; i <= len; i++) {
        part[0][i] = true;
    }

    // init 1st column except 0th 1st cell
    for(let i =1; i<= sum /2; i++) {
        part[i][0] = false;
    }

    for(let i =1; i<= sum /2; i++) {
        for(let j=0; j<= len; j++) {
            part[i][j] = part[i][j-1];
            if(i >= array[j-1]) {
                part[i][j] = part[i][j-1] || part[i - array[j-1]][j-1];
            }
        }
    }
    return part[sum/2][len];
}