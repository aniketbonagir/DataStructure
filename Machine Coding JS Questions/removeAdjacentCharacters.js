// Recursively removing the adjacent Characters if they are same from the string
// ABCCBCBA -> ABBCBA -> ACBA



function myFunction() {
    console.log(removeADjacent("ABCCBCBA"))
}

function removeADjacent(string) {
    let stack = [];
    let newString = [...string];
    stack.push(newString[0]);
    for(let i = 1; i < newString.length; i++) {
        if(newString[i] === stack[stack.length-1]) {
            stack.pop();
        } else {
            stack.push(newString[i]);
        }
    }
    return stack.join("")
}
