/*
Add and Search Word - Data structure design
Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

Example:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
*/

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.trie = {};
    this.endSymbol = "*";
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.trie;
    for(let ch of word) {
        if(!(ch in node)) {
            node[ch] = {};
        }
        node = node[ch];
    }
    node[this.endSymbol] = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
   return this.dfs(word, 0, this.trie);
};

WordDictionary.prototype.dfs = function(word, index, node) {
    if(index === word.length) return (node[this.endSymbol] === true);
    
    if(word[index] == ".") {
        for(let key in node) {
            if(this.dfs(word, index + 1, node[key]))
                return true;
        }
    } else {
        if(node[word[index]] != null) {
            return this.dfs(word, index+1, node[word[index]]);
        }
    }
    return false;
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */