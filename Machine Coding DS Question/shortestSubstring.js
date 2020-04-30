/* 
Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.
input:  arr = ['x','y','z'], str = "xyyzyzyx"

output: "zyx"
*/


function myFunction() {
  const res = getShortestUniqueSubstring(["A","B","C"], "ADOBECODEBANCDDD")
  console.log(res);
}

function getShortestUniqueSubstring(arr, str) {
  // your code goes here
  let finalSubstr = "";
  let headIndex = 0;
  let tailIndex = 0;
  let uniqueChar = 0;
  let charMap = {};
  
  for(let sub of arr) {
    charMap[sub] = 0;
  }
  
  for(tailIndex = 0; tailIndex < str.length; tailIndex++) {
    let tailChar = str[tailIndex];
    
    if(tailChar in charMap) {
      //
    } else {
     continue; 
    }
    
    if (charMap[tailChar] == 0) {
      uniqueChar = uniqueChar + 1;
    }
    charMap[tailChar] += 1;
    
    
    while(uniqueChar === arr.length) {
      let tempLength = tailIndex - headIndex + 1;
      if(tempLength == arr.length) {
        return str.substring(headIndex, tailIndex+1);
      }
      
      if(finalSubstr == "" || tempLength < finalSubstr.length) {
        finalSubstr = str.substring(headIndex, tailIndex+1);
      }
      
      let headChar = str[headIndex];
      
      if(headChar in charMap) {
        let count = charMap[headChar] - 1;
        if(count == 0) {
          uniqueChar -= 1;
        }
        charMap[headChar] = count;
      }
      headIndex += 1;
    }
    
  }
 return finalSubstr;
}
