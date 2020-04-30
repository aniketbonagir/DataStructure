// isIsomorphic string comparision

function myFunction() {
  console.log(isIsomorphic("ab", "aa"));
}

var isIsomorphic = function(s, t) {
    if(s.length !== t.length)
        return false;
    let hash1 = {};
    let hash2 = {};
    let i =0, j=0;
    while(i < s.length) {
        let char1 = s[i];
        let char2 = t[j];
        
        if(char1 in hash1) {
            if(hash1[char1] !==char2 &&  hash2[char2] !== char1) {
                return false;
            }
            i++;
            j++;
        } else {
            hash1[char1] = char2;
            hash2[char2] = char1
            i++;
            j++;
        }
    }
    return true;
};