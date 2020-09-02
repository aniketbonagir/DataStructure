// Permutation in String - Leetcode


function myFunction() {
    
    console.log(checkInclusion(
        "ab",
"eidbaooo"
      ));

}


var checkInclusion = function(s1, s2) {
    if(!s1 || !s2 || s1.length > s2.length) 
        return false;
    
    let charMap = {};
    let textHash = {};
    let start =0;
    
    for(let ch of s1) {
        if(!(ch in charMap)) {
            charMap[ch] = 1;
        } else {
            charMap[ch]++;
        }
    }
    let cnt = Object.keys(charMap).length;
    let end = 0;
    while(end< s2.length) {
        if((s2[end] in charMap)) {
            charMap[s2[end]]--;
            if(charMap[s2[end]] == 0) {
                cnt--;
            }            
        }
        end++;
        while(cnt === 0) {
            if(s2[start] in charMap) {
                charMap[s2[start]]++;
                if(charMap[s2[start]] > 0)
                    cnt++;
            }
            if(end - start == s1.length)
                return true;
            start++
        }
    }
    return false;
    
};