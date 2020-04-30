//quick sort

function myFunction() {
    
    let matrix = [2,1];
    let res = quickSort(matrix);
    console.table(res);
}

function quickSort(array) {
  // Write your code here.
    quickSorTHelper(array, 0, array.length-1);
    return array;
}

function quickSorTHelper(array, low, high) {
    if(low >= high) return;
    let mid = partition(array, low, high);
    quickSorTHelper(array,low, mid-1);
    quickSorTHelper(array,mid+1, high);
}

function partition(array, low, high) {
    let pivot = array[low];
    let j = low;
    for(let i = low+1; i <= high; i++) {
        if(array[i] < pivot) {
            j++;
            swap(array, i, j)
        }
    }
    swap(array, low, j);
    return j;
}

function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
}
// Do not edit the line below.

