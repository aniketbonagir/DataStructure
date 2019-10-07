var problemArr = [[10, 15, 30], [12, 15, 20], [17, 20, 32]];

function myFunction() {
	let res1 = bruteApph(problemArr);
  console.log(res1);

  let res2 = optApprh1(problemArr);
  console.log(res2);
    
}

function bruteApph(arr) {
  let tmp = [].concat(...arr);
  tmp;
  let mergeAr = tmp.sort();
  return mergeAr;
}

function optApprh1(arr) {
  var heap = {...arr};
  let mergeAR = [];
  let minAr = []

  for(sub in heap) {
    minAr.push(heap[sub][0]) // 1st itration
    heap[sub] = removeElementFromAray(heap[sub], heap[sub][0])
  }
  let minVal = Math.min(...minAr);
  minAr = removeElementFromAray(minAr, minVal);
  mergeAR.push(minVal);
  mergeAR

  while (heapIsNotEmpty(heap)) {
    let tmp, curInd, flag = true;
    for(sub in heap) {
      let tmp1 = Math.min(...heap[sub]);
      if( tmp &&  tmp > tmp1) {
        tmp = tmp1;
        curInd = sub;
      } else if(flag) {
        tmp = tmp1;
        curInd = sub;
        flag= false
      }     
    }
    heap[curInd] = removeElementFromAray(heap[curInd], tmp);
    if(!minAr.includes(tmp)) {
      minAr.push(tmp)
    }

    minVal = Math.min(...minAr);
    minAr = removeElementFromAray(minAr, minVal);
    mergeAR.push(minVal);     
  }
  
  return mergeAR;
}

function removeElementFromAray(arr = [], value = 0) {
  return arr.filter(ele => ele != value);
}

function heapIsNotEmpty(heap) {
  let stat = Object.values(heap).map(ele => {
    return ele.length > 0;
  });
  return stat.some(ele => ele == true);

}