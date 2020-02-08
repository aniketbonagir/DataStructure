/* 
Given a string s. Return all the words vertically in the same order in which they appear in s.
Words are returned as a list of strings, complete with spaces when is necessary. (Trailing spaces are not allowed).
Each word would be put on only one column and that in one column there will be only one word.
https://medium.com/algorithm-and-datastructure/print-words-vertically-b0fe01b3ffc6
*/
function printWordVertically(str) {
  let tokenStrArr = str.split(" ");
  let hash = {};
  let maxLen = 0;
  let final = [];
  for( let sub of tokenStrArr) {
    hash[sub.toString()] = sub.length;
  }
  for(let sub in hash) {
    if(hash[sub] > maxLen)
      maxLen = hash[sub];
  }

  for(let i =0; i< maxLen; i++) {
    let tmp = "";
    for(let sub of tokenStrArr) {
      if(sub[i])
        tmp += sub[i];
      else {
        tmp += " ";
      }
    }
    final.push(tmp.trimRight());
  }
  return final
}


printWordVertically("HOW ARE YOU");
printWordVertically("TO BE OR NOT TO BE");
printWordVertically("CONTEST IS COMING");