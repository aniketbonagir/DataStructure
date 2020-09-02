// Read N Characters Given Read4 -Leetcode

var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    
    return function(buf, n) {
        let temp = [];
        let readChar = 0;
        while (readChar < n) { 
            if (temp.length === 0) {
                if( read4(temp) === 0) break; // end of file
            }; // if no bytes unused from last call, read 4 bytes
           buf[readChar++] = temp.shift();
        }
        return readChar;
    };
};