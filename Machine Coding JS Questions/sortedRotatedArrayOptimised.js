// finding a element in a sorted rotated array


function myFunction() {
  let arr = [15, 16, 19, 20, 25,26, 1, 3, 4, 5, 7, 10, 14];

  let index = findIndex(arr, 19);
  console.log(index);
}

function findIndex(arr, ele) {
  return findIndexHelper(arr, 0, arr.length-1, ele);
}

function findIndexHelper(arr, low, high, data) {
  let mid = Math.floor(low + (high-low) / 2);
  if(low > high) {
    return -1;
  }

  if(data == arr[mid]) {
    return mid;
  }

  if(arr[low] <= arr[mid]) {
    if(data >= arr[low] && data < arr[mid]) {
      return findIndexHelper(arr, low, mid-1, data);
    } else {
      return findIndexHelper(arr, mid+1, high, data);
    }
  } else {
    if(data > arr[mid] && data <= arr[high]) {
      return findIndexHelper(arr, mid+1, high, data);
    } else {
      return findIndexHelper(arr, low, mid-1, data);
    }
  }
}
