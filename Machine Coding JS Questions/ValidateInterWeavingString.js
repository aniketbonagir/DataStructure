/* Interweaving Strings
Write a function that takes in three strings and
returns a boolean representing whether or not the
third string can be formed by interweaving the rst
two strings. To interweave strings means to merge
them by alternating their letters without any specic
pattern. For instance, the strings "abc" and "123" can
be interwoven as "a1b2c3", as "abc123", and as
"ab1c23"(this list is nonexhaustive).
Sample input:"algoexpert","your-dream-job","youralgodream-expertjob"
Sample output: True

*/



count = 0;
function myFunction() {
    
    let res = interweavingStringsOptimise("algoexpert", "your-dream-job", "your-algodream-expertjob");
    console.log(res)
}

// DP problem
function interweavingStringsOptimise(one, two, three) {
  // Write your code here.
    if(three.length !== one.length + two.length) {
        return false;
    }
    let cache = new Array(one.length+1).fill(0).map(() => new Array(two.length+1).fill(null));
    return validInterWeavingHelper(one, two, three, 0 , 0, cache);
}

function validInterWeavingHelperOptimise(one, two, three, i, j, cache) {
    if(cache[i][j] !== null) {
        return cache[i][j];
    }

    let k = i + j;
    if(three.length === k) {
        return true;
    }
    console.log(++count);

    
    if(i < one.length && one[i] === three[k]) {
        cache[i][j] = validInterWeavingHelper(one, two, three, i+1, j, cache);
        if(cache[i][j]) {
            return true;
        }
    }
    
    if(j < two.length && two[j] === three[k]) {
        cache[i][j] = validInterWeavingHelper(one, two, three, i, j+1, cache)
        return cache[i][j]
    }
    
    cache[i][j] = false;
    return false;
}


function interweavingStrings(one, two, three) {
  // Write your code here.
    if(three.length !== one.length + two.length) {
        return false;
    }
    return validInterWeavingHelper(one, two, three, 0 , 0);
}

function validInterWeavingHelper(one, two, three, i, j) {
    console.log(++count);
    let k = i + j;
    if(three.length === k) {
        return true;
    }
    
    if(i < one.length && one[i] === three[k]) {
        if(validInterWeavingHelper(one, two, three, i+1, j)) {
            return true;
        }
    }
    
    if(j < two.length && two[j] === three[k]) {
        if(validInterWeavingHelper(one, two, three, i, j+1)) {
            return true;
        }
    }
    
    return false;
}