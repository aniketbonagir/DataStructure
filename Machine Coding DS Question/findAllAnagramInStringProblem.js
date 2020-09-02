/*
Find All Anagrams in a String - Leetcode

Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/


var findAnagrams = function(s, p) {
    let anagram = {};
    let textHash = {};
    let minWindow = p.length;
    let start = 0, cnt =0;
    let final = [];
    for(let ch of p) {
        if(!(ch in anagram)) {
            anagram[ch] = 1;
        } else {
            anagram[ch]++;
        }
    }
    
    for(let i = 0; i< s.length; i++) {
        if(!(s[i] in anagram)) {
            continue;
        } else {
            if(!(s[i] in textHash)) {
                textHash[s[i]] = 1;
            } else {
                textHash[s[i]]++;
            }
            
            if(anagram[s[i]] >= textHash[s[i]]) {
                cnt++;
            }
            
            if(cnt == p.length) {
                while(!(s[start] in textHash) || (textHash[s[start]] > anagram[s[start]])) {
                    if(textHash[s[start]] > anagram[s[start]]) {
                        textHash[s[start]]--;
                    }
                    start++;
                }
                if(minWindow == i - start + 1) {
                    final.push(start)
                }
            }
        }
    }
    return final;
};