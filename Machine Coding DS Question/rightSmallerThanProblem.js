// Right Smaller than Count - BST problem
// AlgoExpert Problem



function myFunction() {
    
    console.log(rightSmallerThan(
        [8, 5, 11, -1, 3, 4, 2]
      ));

}

function rightSmallerThan(array) {
  // Write your code here.
  if(array.length === 0)
    return [];
  const rightSmallerCounts = [];
  const root = new SpecialBst(array[array.length-1]);
  rightSmallerCounts.unshift(0);
  for(let i = array.length-2; i >= 0; i--) {
    root.insert(array[i], rightSmallerCounts);
  }
  return rightSmallerCounts;
}


class SpecialBst {
  constructor(value) {
    this.value = value;
    this.leftSubTreeSize = 0;
    this.left = null;
    this.right = null;
  }
  
  insert(value, rightSmallerCounts, numSmallerAtInsertTime = 0) {
    if(value < this.value) {
      this.leftSubTreeSize++;
      if(this.left === null) {
        this.left = new SpecialBst(value);
        rightSmallerCounts.unshift(numSmallerAtInsertTime);
      } else {
        this.left.insert(value, rightSmallerCounts, numSmallerAtInsertTime);
      }
    } else {
      numSmallerAtInsertTime += this.leftSubTreeSize;
      if(value > this.value) numSmallerAtInsertTime++;
      if(this.right === null) {
        this.right = new SpecialBst(value);
        rightSmallerCounts.unshift(numSmallerAtInsertTime);
      } else {
        this.right.insert(value, rightSmallerCounts, numSmallerAtInsertTime);
      }
    }
  }
}
