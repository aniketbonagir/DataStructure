// To find all the nodes with particular class name under particular HTML root node
// the function should return the list of all html nodes which has the classname
// to test the code go to https://www.wikipedia.org and paste the below code in the developer tool
// and run the main function. ex - findAllNodes("www-wikipedia-org", "central-featured-lang")

function findAllNodes(root, className) {
	let nodes = [document.getElementById(root)];
	let array = [];

	return helper(nodes[0], className, array);

}

function helper(node, className, array) {

	if(node.classList.contains(className)) {
		array.push(node);
	}
	for(let sub of node.children) {
		helper(sub, className, array)
	}

	return array;
	
}


// Approach with Stack which is more optimise way
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