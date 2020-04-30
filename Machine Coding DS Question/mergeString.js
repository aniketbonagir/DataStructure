// Write a function to return a merge string of input array of string
// 1. Only lower case string should be return
// 2. The Time Complexity should be O(N)
// The return string should be in the form of sorted order


function myFunction() {
  const res = MergeStrings(["asD", "bCdfee"])
  console.log(res);
}

function MergeStrings(strings) {
    let newStrAr = strings.join("").split("");
    let retStr = "";
    let hash = {};
    for(let ele of newStrAr) {
        if(ele.charCodeAt(0) >= 97 && ele.charCodeAt(0) <= 122) {
            if(hash[ele]) {
                hash[ele] += 1;
            } else {
                hash[ele] = 1;
            }
        }
    }
    for(let i = 97; i<= 122; i++) {
        if(hash[String.fromCharCode(i)]) {
            retStr += "".padEnd(hash[String.fromCharCode(i)],String.fromCharCode(i));
        }
    }
    return retStr;  
    
}

// Brute force Ways
function MergeStrings2(strings) {
    let newStrAr = strings.join("").split("");
    let lowerCharAr = newStrAr.filter(ele => {
        return ele !== ele.toUpperCase()
    });
    return lowerCharAr.sort().join("");


}

