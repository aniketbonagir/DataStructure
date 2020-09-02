function myFunction() {
    
    console.log(removeKdigits("10200",
1));

}

var removeKdigits = function(num, k) {
    let numStack = [];
    let final = [];
    for(let sub of num) {
        while(k && numStack.length && numStack[numStack.length-1] > sub) {
            numStack.pop();
            k--;
        }
        numStack.push(sub);
    }
    for(let i=0; i< k; i++) {
        numStack.pop();
    }
    
    while(numStack[0] == "0" && numStack.length > 1)
      numStack.shift();

    return numStack.length > 0 ? numStack.join(""): "0";
};