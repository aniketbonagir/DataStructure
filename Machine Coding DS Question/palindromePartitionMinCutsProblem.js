/*
Palindrome Partitioning Min Cuts - AlgoExpert
Given a non-empty string, write a function that
returns the minimum number of cuts needed to
perform on the string such that each remaining
substring is a palindrome.
A palindrome is dened as a string that's written
the same forward as backward. Note that singlecharacter strings are palindromes.
Sample Input
string = "noonabbad"
Sample Output
2 // noon | abba | d"

Optimal Space & Time
Complexity
O(n^2) time | O(n^2) space - where n is
the length of the input string

*/



function myFunction() {
    
    console.log(palindromePartitioningMinCuts(
        "abbba"
      ));

}

// Approach 2 - T - O(n^2) / S - O(N^2)
function palindromePartitioningMinCuts(string) {
  // Write your code here.
  const palindrome = [];
  for(let i = 0; i < string.length; i++) {
    let row = [];
    for(let j =0; j < string.length; j++) {
      if(i === j) {
        row.push(true);
      } else {
        row.push(false);
      }
    }
    palindrome.push(row);
  }
  // Most difficult part
  for(let len = 2; len < string.length+1; len++) {
    for(let i = 0; i < string.length - len + 1; i++) {
      const j = i + len - 1;
      if(len == 2) {
        palindrome[i][j] = string[i] === string[j];
      } else {
        palindrome[i][j] = string[i] === string[j] && palindrome[i+1][j-1];
      }
    }
  }


  const cuts = new Array(string.length).fill(Infinity);
  for(let i =0; i < string.length; i++) {
    if(palindrome[0][i]) {
      cuts[i] = 0;
    } else {
      cuts[i] = cuts[i-1] + 1;
      for(let j = 1; j < i; j++) {
        if(palindrome[j][i] && cuts[j-1] + 1 < cuts[i]) {
          cuts[i] = cuts[j-1] + 1;
        }
      }
    }
  }
  return cuts[cuts.length-1];
}

// Approach 1 - T - O(n^3) / S - O(N^2)
function palindromePartitioningMinCuts(string) {
  // Write your code here.
  let palindromeMatrix = new Array(string.length).fill(1).map(row => []);
  
  for(let i=0; i < string.length; i++) {
    for(let j = i; j<string.length; j++) {
      palindromeMatrix[i][j] = isPalindrome(string.slice(i, j+1));
    }
  }

  // Most difficult part
  const cuts = new Array(string.length).fill(Infinity);
  for(let i =0; i < string.length; i++) {
    if(palindromeMatrix[0][i]) {
      cuts[i] = 0;
    } else {
      cuts[i] = cuts[i-1] + 1;
      for(let j = 1; j < i; j++) {
        if(palindromeMatrix[j][i] && cuts[j-1] + 1 < cuts[i]) {
          cuts[i] = cuts[j-1] + 1;
        }
      }
    }
  }
  return cuts[cuts.length-1];
}

function isPalindrome(string) {
  let i = 0;
  let j = string.length-1;
  while(i < j) {
    if(string[i] !== string[j])
      return false;
    i++;
    j--;
  }
  return true;
}
