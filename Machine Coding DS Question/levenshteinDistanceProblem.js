function myFunction() {
    console.log(levenshteinDistance(
        "abc",
        "yabd"
      ));


}

function levenshteinDistance(str1, str2) {
  // Write your code here.
  let edits = new Array(str2.length+1).fill(0).map(x => new Array(str1.length+1).fill(0));
  for(let i=1; i < str1.length+1; i++) {
    edits[0][i] = edits[0][i-1] + 1; // 1st row fill
  }
  for(let i=1; i < str2.length+1; i++) {
    edits[i][0] = edits[i-1][0] + 1; // 1st column fill
  }
  
  for(let i = 1; i< str2.length+1; i++) {
    for(let j = 1; j< str1.length+1; j++) {
      if(str2[i-1] == str1[j-1]) {
        edits[i][j] = edits[i-1][j-1];
      } else {
        edits[i][j] = 1 + Math.min(edits[i-1][j-1], edits[i][j-1], edits[i-1][j]);
      }
    }
  }
  return edits[str2.length][str1.length];
}