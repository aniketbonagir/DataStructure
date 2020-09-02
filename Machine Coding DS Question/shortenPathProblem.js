// shorten Path problem - algoExpert


function myFunction() {
    
    console.log(shortenPath(
        "/../../foo/../../bar/baz"
      ));

}

function shortenPath(path) {
  // Write your code here.
  let startWithSlash = path[0] === "/";
  const tokens = path.split("/").filter(isImportantToken);
  let stack = [];
  if(startWithSlash) stack.push("");
  for(const token of tokens) {
    if(token === "..") {
      if(stack.length === 0 || stack[stack.length-1] === "..") {
        stack.push(token);
      } else if(stack[stack.length-1] !== "") {
        stack.pop();
      }
    } else {
      stack.push(token);
    }
  }
  
  if(stack.length === 1 && stack[0] === "") return "/";
  return stack.join("/");
}

function isImportantToken(str) {
  return str.length > 0 && str !== "."; 
}