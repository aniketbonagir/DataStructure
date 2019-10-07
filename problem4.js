var prb1 = [3, 4, -1, 1];
var prb2 = [1, 2, 0];

let res1 = missingLowestPostiveNos(prb1);
//res1;

let res2 = missingLowestPostiveNos(prb2);
//res2;

let res3 = missingLowestPostiveNos2(prb1);


function missingLowestPostiveNos(arr = []) {
  for(i = 1; i<= arr.length; i++) {
    if(!arr.includes(i)) {
      return i;
    }
  }
}

function missingLowestPostiveNos2(arr = []) {
  let tmpArp = arr.sort();

  for( i = 1; i<= tmpArp.length; i++) {
    if(tmpArp.indexOf(i) === -1) {
      return i;
    }
  }
}