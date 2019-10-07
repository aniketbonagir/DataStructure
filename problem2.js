var problemArr1 = [1, 2, 3, 4, 5];
var problemArr2 = [3, 2, 1];

let res = factor(problemArr1);
console.log(res)

let res2 = factor(problemArr2);
console.log(res2)

function factor(pArr) {
  let resArr = [];
  let len = pArr.length-1;
  pArr.forEach((ele, index, arr) => {
    let i =0, j = len;
    let product = 1;
    while (i < index || j > index) {
      if (i < index) {
          product = product * arr[i];
          i++;
      }
      if (j > index) {
        product = product * arr[j];
        j--;
      }
    }
    resArr.push(product);
  });

  return resArr;
}