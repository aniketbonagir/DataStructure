/* 
Disk Stacking
You are given a non-empty array of arrays. Each subarray holds three integers and represents a disk.
These integers denote each disk's width, depth, and height, respectively. Your goal is to stack up the
disks and to maximize the total height of the stack. A disk must have a strictly smaller width, depth, and
height than any other disk below it. Write a function that returns an array of the disks in the nal stack,
starting with the top disk and ending with the bottom disk. Note that you cannot rotate disks; in other
words, the integers in each subarray must represent [width, depth, height] at all times. Assume that
there will only be one stack with the greatest total height.
Sample input: [[2, 1, 2], [3, 2, 3], [2, 2, 8], [2, 3, 4], [1, 3, 1], [4, 4, 5]]
Sample output: [[2, 1, 2], [3, 2, 3], [4, 4, 5]]

*/

function myFunction() {
  let arr = [
        [2, 1, 2],
        [3, 2, 3],
        [2, 2, 8],
        [2, 3, 4],
        [2, 2, 1],
        [4, 4, 5],
      ];

  let index = diskStacking(arr);
  console.log(index);
}

function diskStacking(disks) {
  // Write your code here.
    disks.sort((a, b) => a[2] - b[2]);
    let sequences = new Array(disks.length).fill(undefined)
    let height = disks.map(d => d[2]);
    let maxHeightIndex = 0;
    for(let i=1; i< disks.length; i++) {
        let cDisk = disks[i];
        for(let j=0; j<i; j++) {
            let otherDisk = disks[j];
            if(validDimension(cDisk, otherDisk)) {
                if(height[i] < cDisk[2] + height[j]) {
                    height[i] = cDisk[2] + height[j];
                    sequences[i] = j;
                }
            }
        }
                if(height[i] >= height[maxHeightIndex]) {
            maxHeightIndex = i;
        }
    }
    return buidSequence(disks, sequences, maxHeightIndex);
}

function buidSequence(array, sequences, currentIdx) {
    let seq = [];
    while(currentIdx != undefined) {
        seq.push(array[currentIdx]);
        currentIdx = sequences[currentIdx];
    }
    
    return seq.reverse();
}

function validDimension(C, O) {
    return (O[0] < C[0] && O[1] < C[1] && O[2] < C[2]);
}