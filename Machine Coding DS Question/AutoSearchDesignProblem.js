// Design Search Autocomplete System - Leetcode



function myFunction() {
    let search = new AutocompleteSystem(
      ["i love you","island","iroman","i love leetcode"],
      [5,3,2,2]
    );
    console.log(search.input("i"));
    console.log(search.input(" "));
    console.log(search.input("a"));
    console.log(search.input("#"));

}

var AutocompleteSystem = function(sentences, times) {
    this.sentences = sentences;
    this.times = times;
    this.trie = {};
    this.sentenceList = "wordList";
    this.endOfSentence = "*";
    this.inputSentence = "";
    this.frequenceMap = {};
    
    this.generateTrie(sentences, times);
    
};



AutocompleteSystem.prototype.generateTrie = function(sentences, times) {
    for(let i = 0; i< sentences.length; i++) {
        this.insert(sentences[i], times[i]);
    }
};

AutocompleteSystem.prototype.insert = function(sentence, times) {
    let node = this.trie;
    this.frequenceMap[sentence] = times; // Added entry in Map
    for(let ch of sentence) {
        if(!(ch in node)) {
            node[ch] = {};
        }
        node = node[ch];
        if(this.sentenceList in node) {
            node[this.sentenceList].push(sentence);
        } else {
             node[this.sentenceList] = [sentence];
        }
    }
    node[this.endOfSentence] = true;
};

AutocompleteSystem.prototype.lookUp = function(sentence) {
    let list = [];
    let node = this.trie;
    for(let s of sentence) {
        if(!(s in node)) {
            return [];
        }
        node = node[s];
    }
    return this.process(node[this.sentenceList], list);
};

AutocompleteSystem.prototype.process = function(sentenceList, list) {
    list = sentenceList.map((sent) => new node(sent, this.frequenceMap[sent]));
    list.sort((a,b) => {
        return (a.times == b.times) ? a.sentence.localeCompare(b.sentence) : a.times - b.times;
    });
    return list;
}

/** 
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {
    
    if(c === "#") {
      if(this.inputSentence in  this.frequenceMap) {
        this.frequenceMap[this.inputSentence]++;
      } else {
        this.frequenceMap[this.inputSentence] = 1;
        this.insert(this.inputSentence, this.frequenceMap[this.inputSentence]);
      }        
        this.inputSentence = "";
        return [];

    } else {
        this.inputSentence += c;
        let list =  this.lookUp(this.inputSentence);
        let rList = [];
        for(let i = 0; i<list.length; i++) {
          if(i < 3) {
            rList.push(list[i].sentence);
          }
        }
        return rList;
    }
    
};

function node(sentence, freq) {
    this.sentence = sentence;
    this.times = freq;
}