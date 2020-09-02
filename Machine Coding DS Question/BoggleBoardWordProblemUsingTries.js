/*
You're given a two-dimensional array (a matrix) of
potentially unequal height and width containing letters; this
matrix represents a boggle board. You're also given a list of
words.
Write a function that returns an array of all the words
contained in the boggle board.
A word is constructed in the boggle board by connecting
adjacent (horizontally, vertically, or diagonally) letters,
without using any single letter at a given position more than
once; while a word can of course have repeated letters,
those repeated letters must come from dierent positions
in the boggle board in order for the word to be contained in
the board. Note that two or more words are allowed to
overlap and use the same letters in the boggle board

board = [
 ["t", "h", "i", "s", "i", "s", "a"],
 ["s", "i", "m", "p", "l", "e", "x"],
 ["b", "x", "x", "x", "x", "e", "b"],
 ["x", "o", "g", "g", "l", "x", "o"],
 ["x", "x", "x", "D", "T", "r", "a"],
 ["R", "E", "P", "E", "A", "d", "x"],
 ["x", "x", "x", "x", "x", "x", "x"],
 ["N", "O", "T", "R", "E", "-", "P"],
 ["x", "x", "D", "E", "T", "A", "E"],
],
words = [
 "this", "is", "not", "a", "simple", "boggle",
 "board", "test", "REPEATED", "NOTRE-PEATED",
]

Opt= ["this", "is", "a", "simple", "boggle", "board", "NOTRE-PEATED"]


*/


function boggleBoard(board, words) {
  // Write your code here.
	const trie = new Tries();
	for(let word of words) {
		trie.add(word);
	}
	let finalWord = {};
	let visited = board.map(row => row.map(letter => false));
	for(let i=0; i< board.length; i++) {
		for(let j =0; j<board[0].length;j++) {
			explore(i, j, board, trie.root, visited, finalWord);
		}
	}
	return Object.keys(finalWord);
}

function explore(i, j, board, root, visited, finalWord) {
	if(visited[i][j]) return;
	const letter = board[i][j];
	
	if(!(letter in root)) return;
	
	visited[i][j] = true;
	root = root[letter];
	
	if("*" in root) {
		finalWord[root["*"]] = true;
	}
	const neighbour = getNeighbours(i, j, board);
	for(const [x, y] of neighbour) {
		explore(x, y, board, root, visited, finalWord);
	}
	visited[i][j] = false;
}

function getNeighbours(i, j, board) {
	const neighbours = [];
	if(i > 0 && j > 0) {
		neighbours.push([i-1,j-1]);
	}
	if(i > 0 && j < board[0].length-1) {
		neighbours.push([i-1,j+1]);
	}
	
	if(i < board.length-1 && j < board[0].length-1) {
		neighbours.push([i+1,j+1]);
	}
	
	if(i < board.length-1 && j > 0) {
		neighbours.push([i+1,j-1]);
	}
	
	if(i > 0) {
		neighbours.push([i-1,j]);
	}
	
	if(i < board.length-1) {
		neighbours.push([i+1,j]);
	}
	
	if(j > 0) {
		neighbours.push([i,j-1]);
	}
	
	if(j < board[0].length-1) {
		neighbours.push([i,j+1]);
	}
	return neighbours;
}


class Tries {
	constructor() {
		this.root = {};
		this.endSymbol = "*";	
	}	

	add(word) {
		let node  = this.root;
		for(let ch of word) {
			if(!(ch in node)) {
				node[ch] = {};
			}
			node = node[ch];
		}
		node[this.endSymbol] = word
	}
}

