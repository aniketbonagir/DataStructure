// Word Squares Leetcode Problem
function myFunction() {
    console.log(wordSquares(["area","lead","wall","lady","ball"]));

    
}

// Approach 2 using Tries
var wordSquares = function(words) {
    let results = [];
    let trie = {};
    
    const buildTries = () => {
        for(let i=0; i<words.length;i++) {
            let word = words[i];
            let node = trie;
            for(let ch of word) {
                if(ch in node) {
                    node = node[ch];
                } else {
                    let newNode = {};
                    newNode["#"] = [];
                    node[ch] = newNode;
                    node = newNode;
                }
                node["#"].push(i);
            }
        }
    }

    const getPrefixWords = (prefix) => {
        let node = trie;
        for(let pre of prefix) {
            if(!(pre in node)) {
                return [];
            } else {
                node = node[pre];
            }
        }
        return node["#"].map(i => words[i]);
    }

    const buildWordSquare = (step, wordSquare, wordsList) => {
        if(step === wordsList[0].length) {
            results.push(wordSquare.slice(0));
            return
        }
        
        let prefix = "";
        for(let word of wordSquare) {
            prefix += word[step];
        }

        for(let word of getPrefixWords(prefix)) {
            wordSquare.push(word);
            buildWordSquare(step+1, wordSquare, wordsList);
            wordSquare.pop();
        }
    }

    buildTries();

    for(let word of words) {
        let wordSquare = [word];
        buildWordSquare(1, wordSquare, words);
    }
    return results;
};

// Approach 1 with Hash table
var wordSquares1 = function(words) {
    let results = [];
    let prefixHash = {};
    
    const buildPrefixHash = () => {
        for(let word of words) {
            for(let i=1; i< word.length; i++) {
                let prefix = word.substring(0,i);
                if(prefix in prefixHash) {
                    prefixHash[prefix].push(word);
                } else {
                    prefixHash[prefix] = [word];
                }
            }
        }
    }

    const getPrefixWords = (prefix) => {
        if(prefix in prefixHash) {
            return prefixHash[prefix];
        } else {
            return [];
        }
    }

    const buildWordSquare = (step, wordSquare, wordsList) => {
        if(step === wordsList[0].length) {
            results.push(wordSquare.slice(0));
            return
        }
        
        let prefix = "";
        for(let word of wordSquare) {
            prefix += word[step];
        }

        for(let word of getPrefixWords(prefix)) {
            wordSquare.push(word);
            buildWordSquare(step+1, wordSquare, wordsList);
            wordSquare.pop();
        }
    }

    buildPrefixHash();

    for(let word of words) {
        let wordSquare = [word];
        buildWordSquare(1, wordSquare, words);
    }
    return results;
};