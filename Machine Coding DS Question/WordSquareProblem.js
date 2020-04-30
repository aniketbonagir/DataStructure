// Word Squares Leetcode Problem

function myFunction() {
    console.log(wordSquares(["area","lead","wall","lady","ball"]));

    
}
var wordSquares = function(words) {
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