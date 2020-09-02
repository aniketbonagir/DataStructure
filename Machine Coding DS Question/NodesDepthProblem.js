/*
All Kinds Of Node - AlgoExpert
Depths
The distance between a node in a Binary
Tree and the tree's root is called the
node's depth.
Write a function that takes in a Binary
Tree and returns the sum of all of its
subtrees' nodes' depths

*/


function allKindsOfNodeDepths(root) {
  // Write your code here.
  return getSumOfDepth(root).sumOfAllDepths;
}

function getSumOfDepth(root) {
  if(root == null) {
      return {
        numNodesInTree: 0,
        sumOfDepths: 0,
        sumOfAllDepths: 0
      }
  }
  
  const leftTreeInfo = getSumOfDepth(root.left);
  const rightTreeInfo = getSumOfDepth(root.right);
  
  const sumOfLeftDepths = leftTreeInfo.sumOfDepths + leftTreeInfo.numNodesInTree;
  const sumOfRightDepths = rightTreeInfo.sumOfDepths + rightTreeInfo.numNodesInTree;
  
  const numNodesInTree = 1 + leftTreeInfo.numNodesInTree + rightTreeInfo.numNodesInTree;
  const sumOfDepths = sumOfLeftDepths + sumOfRightDepths;
  const sumOfAllDepths = sumOfDepths + leftTreeInfo.sumOfAllDepths + rightTreeInfo.sumOfAllDepths;
  
  return {
    numNodesInTree,
    sumOfDepths,
    sumOfAllDepths    
  }
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}