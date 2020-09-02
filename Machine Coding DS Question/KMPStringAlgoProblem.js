/*
Knuth—Morris—Pratt Algorithm
Write a function that takes in two strings and checks if the first string contains the second one using
 the Knuth—Morris—Pratt algorithm. The function should return a boolean

Input
string = "aefoaefcdaefcdaed"
substring = "aefcdaed"

Opt - true

Optimal Space & Time Complexity
O(n + m) time | O(m) space - where n is the length of the main string and m is the length of the potential substring
*/



function knuthMorrisPrattAlgorithm(string, substring) {
  // Write your code here.
	let pat = buildPattern(substring);
	return getStringMatch(string, substring, pat);
}

function buildPattern(substring) {
	let j=0;
	let i=1;
	let pat = new Array(substring.length).fill(-1);
	while(i < substring.length) {
		if(substring[i] === substring[j]) {
			pat[i] = j;
			i++;
			j++;
		} else if(j > 0) {
			j = pat[j-1] + 1;
		} else {
			i++;
		}
	}
	return pat;
}

function getStringMatch(string, substring, pat) {
	let i = 0;
	let j = 0;
	while(i + substring.length - j <= string.length) {
		if(string[i] === substring[j]) {
			if(j == substring.length-1)
				return true;
			i++;
			j++;
		} else if(j > 0) {
			j = pat[j-1] + 1;
		} else {
			i++;
		}
	}
	return false;
}