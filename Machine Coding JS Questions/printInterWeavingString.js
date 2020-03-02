function myFunction() {
  let str1 = "AB";
  let str2 = "CD";
  let list = [];
  let res = new Array(str1.length+str2.length).fill(0);
  printInterleaveString(str1.split(""), str2.split(""), res, list, str1.length, str2.length, 0)
  console.table(list)
}

function printInterleaveString(str1, str2, res, list, m, n, i) {
    if(m==0 && n == 0) {
        list.push(res.join(""));
    }

    if(m !== 0) {
        res[i] = str1[0];
        printInterleaveString(str1.slice(1), str2, res, list, m-1, n, i+1)
    }

    if(n !== 0) {
        res[i] = str2[0];
        printInterleaveString(str1, str2.slice(1), res, list, m, n-1, i+1)
    }
}