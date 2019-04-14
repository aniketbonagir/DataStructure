// Implement a algo to determine if a string has all unique char

let exString = "abcdef";

const way1 = (str) => {
    // bruteforce way
    let uni= "";
    for (let sub of str) {
        if (uni.indexOf(sub) === -1) {
            uni += sub;
        } else {
            return false;
        }
    }
    uni
    return true;
};

let way2 = (str) => {
    let hashTable = {};
    let unique = true;
    for(let sub of str) {
        if (hashTable[sub] !== undefined) {
            hashTable[sub] += 1;
            unique = false;
            // didnt break here so a to determine duplication count for each char in 
        } else {
            hashTable[sub] = 0;
        }
        console.log(hashTable[sub]);
    }
    hashTable
    return unique;
};

let res1 = way1(exString);
res1

let res2 = way2(exString);
res2;
