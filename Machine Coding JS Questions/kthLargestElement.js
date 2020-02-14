// finding Kth largest Element

var findKthLargest = function(nums, k) {
   return pivotHelper(nums, 0, nums.length, nums.length-k);    
};
    
function pivotHelper(arr, low, high, k) {
     let pivotPoint;
    if(low == high) {
        return arr[low];
    } else {
        pivotPoint = partition(arr, low, high);
        if(k == pivotPoint) {
            return arr[pivotPoint];
        } else if(k < pivotPoint) {
            return pivotHelper(arr, low, pivotPoint-1, k);
        } else {
            return pivotHelper(arr, pivotPoint+1, high, k)
        }
    }
}



function partition(arr, low, high) {
    let i, j, pivot;
    pivot = arr[low];
    j = low;
    for(let i = low+1; i<= high; i++ ) {
        if(arr[i] < pivot) {
            j++;
            swap(arr, i, j);
        }
    }
    let pivotPoint = j;
    swap(arr, low, pivotPoint);
    return pivotPoint;
}


function swap(arr, X, Y) {
  [arr[X], arr[Y]] = [arr[Y], arr[X]];
}