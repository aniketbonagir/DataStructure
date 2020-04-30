// Given an array of n elements, print the frequencies of elements without using extra space, assuming all the 
// element are in range of 1..n

function myFunction() {
  let arr = [10,10,9,4,7,6,5,2,3,2,1];

  let index = findFrequency(arr);
  console.log(index);
}

function findFrequency(arr) {
    let pos =0;
    while(pos < arr.length) {
        let expectedPos = arr[pos]-1;
        if(arr[pos] > 0 && arr[expectedPos]>0) {
            swap(arr, pos, expectedPos);
            arr[expectedPos] = -1;
        } else if(arr[pos] > 0) {
            arr[expectedPos]--;
            arr[pos++] = 0
        } else {
            pos++;
        }
    }
    return arr;
}

function swap(array, x, y) {
    [array[x], array[y]] = [array[y], array[x]];
}
