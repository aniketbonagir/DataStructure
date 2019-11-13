// To determine the the number of times the word BALLOON can be formed from the character of 
// a given string

function myFunction() {

    let res =  solution("BAONXXOLL");
    // let res2 = solution('The quick brown fox jumps over the lazy dog', 39);
    
  console.log(res);

}

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let hashObj = {};
    let matchStr = "BALLOON";
    let moves = 0;
    for(let i = 0; i< S.length; i++) {
        if(hashObj[S[i]] > 0) {
            hashObj[S[i]] += 1;
        }  else {
            hashObj[S[i]] = 1;
        }
    }
    let j =0;
    for(let i =0; i< S.length; i++) {
        if( j == matchStr.length -1) {
            j =0;
            moves++;
        }
        if(hashObj[matchStr[j]] > 0) {
            hashObj[matchStr[j]] -= 1;
            j++
        } else {
            break;
        }
    }

    return moves;

}