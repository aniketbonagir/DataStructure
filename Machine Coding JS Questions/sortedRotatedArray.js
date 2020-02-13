// finding a element in a sorted rotated array

function myFunction() {
  let arr = [15, 16, 19, 20, 25,26, 1, 3, 4, 5, 7, 10, 14];

  let index = findIndex(arr, 14);
  console.log(index);
}

function findPivot(arr, low, high) {
  if(high - low === 0) {
    return low;
  } else if (low == high-1) {
    return (arr[low] >= arr[high]) ? low : high;
  } else {
    let mid = Math.floor(low + (high-low)/2);
    if(arr[low] >= arr[mid]) {
      return findPivot(arr, low, mid);
    } else {
      return findPivot(arr, mid, high);
    }    
  }
}

function binarySearch(arr, low, high, elem) {
  if(low <= high) {
    let mid = Math.floor(low + (high-low)/2);
    if(arr[mid] === elem) {
      return mid;
    } else if(elem < arr[mid]) {
      return binarySearch(arr, low, mid-1, elem);
    } else {
      return binarySearch(arr, mid+1, high, elem);
    }
  } else {
    return -1;
  }
}

function findIndex(arr, elem) {
  let pivot = findPivot(arr, 0 , arr.length-1);
  // pivot
  if(arr[pivot] == elem) {
    return pivot;
  } else if(elem >= arr[0]) {
    return binarySearch(arr, 0, pivot-1, elem);
  } else {
    return binarySearch(arr, pivot+1, arr.length-1, elem);
  }
}