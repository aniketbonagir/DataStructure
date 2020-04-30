// Merging 2 Sorted arrays A and B, The first one being of size m + n with only m elements in it and other being size of n with n elements in it. Merge the 2 arrays into first array such that size is m+n of the sorted array


function myFunction() {
  let A = [1, 2, 4, 6, undefined, undefined, undefined]
  let B = [1, 3, 5, 6]

  merge2(A, 4, B, 3)
  console.log(A);
}

function merge1(arr1, m, arr2, n) {
  let i = n-1, j = m-1, count = m, k = m+n-1;
  for(; k>=0; k--) {
    if(arr2[i] > arr1[j] || j < 0) {
      arr1[k] = arr2[i]
      i--;
      if(i<0)
        break;
    } else {
      arr1[k] = arr1[j];
      j--;
    }
  }
}

function merge2(arr1, m, arr2, n) {
  let i = m-1;
  let j = n-1;
  let lastIndex = m + n - 1;

  while(j >= 0) {

    if(i >= 0 && arr1[i] > arr2[j]) {
      arr1[lastIndex] = arr1[i]
      i--;
    } else {
      arr1[lastIndex] = arr2[j];
      j--;
    }
    lastIndex--;
  }
}