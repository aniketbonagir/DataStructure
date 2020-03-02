/*
Longest Common SubSequence in 2 strings 
assume m and n are the len of 2 strings

1. if X[i] == Y[j] then 1 + LCS(i+1, j+1)
2. if X[i] != Y[j] then LCS(i+1, j) // skipping the i character
1. if X[i] != Y[j] then LCS(i, j+1) // // skipping the j character

formula
LCS(i,j) = {
	0,  // if i=m and j=n
	Max(LCS(i+1, j), LCS(i, j+1))  // if X[i] != Y[j]
	1 + LCS(i+1, j+1) // if X[i] == Y[j]
}



*/