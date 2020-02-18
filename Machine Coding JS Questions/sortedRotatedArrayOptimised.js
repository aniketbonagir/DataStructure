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


function findIndexHelperIterative(array, low, high, data) {
  
  while(low <= high) {
    let mid = Math.floor(low + (high-low)/2);
  
    if(data === array[mid]) {
      return mid;
    } else {
      if(array[low] <= array[mid]) {
        if(data >= array[low] && data < array[mid]) {
          high = mid-1;
        } else {
          low = mid+1;
        }
      } else {
        if(data > array[mid] && data <= array[high]) {
          low = mid+1;
        } else {
          high = mid-1;
        }
      }
    }
  }
  return -1;
}