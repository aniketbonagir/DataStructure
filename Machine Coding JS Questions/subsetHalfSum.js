// Find the subset of these n elements whose sum is exactly half of the total sum of numbers

function myFunction() {
    
    let res = subsetHalfSum([1, 2, 3, 4]);
    console.log(res)
}

function subsetHalfSum(array) {
    let sum =0;
    sum = array.reduce((acc, cur) => acc + cur);
    let T = new Array(sum+1).fill(0);
    T[0] = 1;

    for(let i =0; i< array.length; i++) {
        for(let j = sum - array[i]; j >=0; j--) {
            if(T[j]) {
                T[j + array[i]] = 1;
            }
        }
    }

    return T[sum / 2];

}

function subsetHalfSumEfficient(array) {
    let sum =0;
    sum = array.reduce((acc, cur) => acc + cur);
    array.sort((a,b) => a-b);
    let T = new Array(sum+1).fill(0);
    T[0] = 1;
    let R = 0;
    for(let i =0; i< array.length; i++) {
        for(let j = R; j >=0; j--) {
            if(T[j]) {
                T[j + array[i]] = 1;
                R = Math.min(Math.floor(sum /2), R + array[i])
            }
        }
    }

    return T[sum / 2];

}
