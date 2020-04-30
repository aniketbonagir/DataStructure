// Finding Longest Increasing Subsequence


function myFunction() {
    // [5,6,2,3,4,1,9,9,8,9,5]
    // [5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35]
    
    let res = longestIncreasingSubsequence([5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35]);
    console.log(res)
}

//Printing LIS length
function LIS(array) {
    let max =0;
    let LIStable = [];
    for(let i=0;i< array.length; i++) {
        LIStable[i] = 0;
    }

    for(let i =0; i< array.length; i++) {
        for(let j=0; j<i; j++) {
            if(array[j] < array[i] && LIStable[i] < LIStable[j] +1) {
                LIStable[i] = LIStable[j] + 1;
            }
        }
    }

    for(let i=0;i< array.length; i++) {
        if(max < LIStable[i]) {
            max = LIStable[i];
        }
    }
    return max;
}

// T- O(n^2) | S-O(n)
function longestIncreasingSubsequence(array) {
  // Write your code here.
    let sequences = new Array(array.length);
    let lengths = array.map(x => 1);
    let maxId = 0;
    for(let i =0 ; i< array.length; i++) {
        for(let j=0; j< i; j++) {
            if(array[j] < array[i] && lengths[j] + 1 > lengths[i]) {
                lengths[i] = lengths[j] + 1;
                sequences[i] = j;
            }
        }
        if(lengths[i] >= lengths[maxId]) {
            maxId = i;
        }
    }
    
    return buildSequence(array, sequences, maxId);
}

function buildSequence(array, sequences, currId) {
    let sequence = [];
    while(currId != undefined) {
        sequence.unshift(array[currId]);
        currId = sequences[currId];
    }
    return sequence;
}