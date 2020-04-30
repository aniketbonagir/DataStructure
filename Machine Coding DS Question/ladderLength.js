// ladderLength leetcode problem


function myFunction() {
  console.log(ladderLength("hot", "dog", ["hot","dog"]));
}

var ladderLength = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord))
        return 0;
    let wordsDict = dict(wordList, beginWord.length);
    let visitedBegin = {};
    let visitedEnd = {};
    
    let beginQue = [[beginWord, 1]];
    visitedBegin[beginWord] = 1;
    let endQue = [[endWord, 1]];
    visitedEnd[endWord] = 1;
    while(beginQue.length > 0 && endQue.length >0) {
        let res = visitedWordNode(beginQue, visitedBegin, visitedEnd, wordsDict, beginWord.length)
        if(res != 0) {
            return res;
        }
        res = visitedWordNode(endQue, visitedEnd, visitedBegin, wordsDict, beginWord.length)
        if(res != 0) {
            return res;
        }
    }
    return 0;
    
};

function visitedWordNode(que, visited, visitedOther, wordsDict, len) {
    let [curWord, level] = que.shift();
    for(let i =0; i< len; i++) {
      let nWord = curWord.substr(0, i) + "*" + curWord.substr(i+1, len)
      if(nWord in wordsDict) {
        for(let word of wordsDict[nWord]) {
            if(word in visitedOther) {
                return level + visitedOther[word]
            } else if(!(word in visited)) {
                visited[word] = level + 1;
                que.push([word, level +1]);
            }
        }
      }        
    }
    return 0;
}

function dict(wordList, len) {
    let hash = {};
    for(let word of wordList) {
        for(let i=0; i<len; i++) {
            let nWord = word.substr(0, i) + "*" + word.substr(i+1, len)
            if(nWord in hash) {
                hash[nWord].push(word);
            } else {
                hash[nWord] = [word]
            }
        }
    }
    return hash;
}