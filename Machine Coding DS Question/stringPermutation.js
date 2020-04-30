// Write a program to print all permutations of a given string(anagram)

function myFunction() {
  
  let str= "abc"
  let used = new Array(str.length).fill(0);
  let permut = [];

  permutation(str.split(""), 0,str.length-1, permut);
  console.log(permut);
}

function permutation(original, low, right, permut) {
    if(low == right) {
        permut.push(original.join(""));
    } else {
        for(let i=low; i <= right; i++) {
            swap(original, low, i);
            permutation(original, low+1, right, permut);
            swap(original, low, i);
        }
    }
    
}

function swap(array, l, r) {
    [array[l], array[r]] = [array[r], array[l]]
}
