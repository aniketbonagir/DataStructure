function myFunction() {
  
  let str= "This is a double dooers"

  let nstr = reverseWordInSentence(str);
  console.log(nstr);
}

function reverseWordInSentence(sentence) {
    let newString = sentence.split("");
    newString.shift(" ");
    reverse(newString, 0 ,newString.length-1);
    for(let wordStart=0, wordEnd=0; wordEnd < newString.length-1; wordEnd++) {
        if(newString[wordEnd] != " ") {
            wordStart = wordEnd;
            while(newString[wordEnd] != " " && wordEnd < newString.length-1) {
                wordEnd++;
            }
            wordEnd--;
            reverse(newString, wordStart, wordEnd);
        }
    }
    return newString.join("");

}

function reverse(str, start, end) {
    while(start < end) {
        [str[start], str[end]] = [str[end], str[start]];
        start++;
        end--
    }
}