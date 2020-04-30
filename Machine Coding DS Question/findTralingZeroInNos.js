// finding total trailing zeros in N! factorial
// count = 0;
function myFunction() {

  let index = findTralingZeroInNos(20);
  console.log(index);
}

function findTralingZeroInNos(n) {
    let count =0;
    for(let i=5; Math.floor(n/i) > 0; i*=5) {
        count += Math.floor(n/i);
    }
    return count;
}

