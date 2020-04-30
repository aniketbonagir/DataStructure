// Changing the contribution color graph of gitHub

function colorConverter() {
let root = findAllNodesStack("js-pjax-container", "js-calendar-graph-svg");
var node = root[0].children;
var list = node[0].children;
let count = 0;
	for(let sub of list) { // 1st level -> g
		for(let item of sub.children) { // rect
			if(count % 5 == 0) {
				let cFill = Object.values(item.attributes).find( s=> s.name == "fill");
				cFill.value = "#c6e48b";
			}
			if(count % 3 == 0) {
			  	let cFill = Object.values(item.attributes).find( s=> s.name == "fill");
				cFill.value = "#239a3b";
			} else if(count % 2 == 0) {
				let cFill = Object.values(item.attributes).find( s=> s.name == "fill");
				cFill.value = "#239a3b";
			 // some color
			} else {
				let cFill = Object.values(item.attributes).find( s=> s.name == "fill");
				cFill.value = "#196127";
			}
			count++;
		}
	}	
}

function findAllNodesStack(root, className) {
	let stack = [document.getElementById(root)];
	let array = [];

	while(stack.length) {
		let node = stack.pop();
		if(node.classList.contains(className)) {
			array.push(node);
		}
		for(let sub of node.children) {
			stack.push(sub)
		}
	}

	return array;

}