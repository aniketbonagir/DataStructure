// check Bad version problem - Leetcode

function myFunction() {
  console.log(checkVersion(5));
}

function checkBad(version) {
  return version >= 4;
}

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // console.log(String(isBadVersion))
        let right = n;
        let left = 1;
        while(left < right) {
            let mid = Math.floor(left + (right - left)/2);
            if(isBadVersion(mid)) {
                right = mid;                
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
};

let checkVersion = solution(checkBad);