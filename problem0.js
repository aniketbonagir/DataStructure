// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

let ar = [10, 15, 3, 7];

let res1 = sumar(ar, 16);
res1

let res2 = sumar1(ar, 10);
res2

function sumar1(array, target) {
  let tup = [];
  let diff = {};
  for(let cur = 0; cur< array.length; cur++) {
    let ndif = target - array[cur];
    if(ndif in diff) {
      tup.push([array[cur], ndif]);
    } else {
      diff[array[cur]] = true;
    }
  }
  return tup.length > 0;
}


function sumar(array, target) {
  let tup = [];
  let cur = 0;
  while(cur < array.length-1) {
    for(let i= cur + 1; i < array.length; i++) {
      let nSum = array[cur] + array[i];
      if(nSum == target) {
        tup.push([array[cur], array[i]])
      }
    }
    cur++
  }
  return tup.length > 0;
}