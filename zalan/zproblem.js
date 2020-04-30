// to Output Sentence of K length with whole words
function solution(message, K) {
   let msgWords = message.split(" ");
   let trimmed = "";
   let i = 0;
   while(trimmed.length <= K && typeof msgWords[i] === "string") {
     // let newMsg = trimmed + " " + msgWords[i];
     let newMsg = `${trimmed}${trimmed.length > 0 ? " ": ""}${msgWords[i]}`;
     if (newMsg.length <= K) {
       trimmed = newMsg;
     }
     console.log(trimmed);
     i++;
   };
   return trimmed.trim();
}

// Transforming array elements
function solution(A = 0) {
    // write your code in JavaScript (Node.js 8.9.4)
    let numAr = String(A).split("");
    let trsnfAr = [];
    let len = numAr.length;
    for(let i=0; i<len; i++) {
        if(i%2 == 0) {
           trsnfAr.push(numAr.shift());
        } else {
            trsnfAr.push(numAr.pop());
        }
    }
    return +trsnfAr.join("");
}

// Determining max length of td cells in any particular table
function solution3() {
  let elem = $('body');
  let tables = elem.find("table");
  let maxCells = 0;
  tables.each(function() {
    let cells = $(this).find("td").length;
    if (cells > maxCells) {
      maxCells = cells;
    }
  });
  return maxCells;
}