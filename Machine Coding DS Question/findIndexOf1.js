Find the index of first 1 in a sorted array of 0’s and 1’s if the array range is not know
function myFunction() {
    
    let matrix = [0, 0, 0, 0, 0, 0, 1 ,1, 1, 1, 1];
    let res = findIndex(matrix);
    console.table(res);
}

function findIndex(array) {
    let k =1;
    let range = Math.pow(2, k);
    while(range < array.length) {
       let low =0;
       let high = range;
       while(low < high) {
        let mid = Math.floor((low + high)/2);
            if(array[mid] == 1 && array[mid-1] == 0) {
                return mid;
            } else if(array[mid] == 0 && array[mid+1] == 1) {
                return mid+1;
            } else if(array[mid-1] == 1 && array[mid] == 1) {
                high = mid-1;
            } else {
                low = mid+1;
            }
       }
       k++;
       range = Math.pow(2, k);
    }

    return -1;
}