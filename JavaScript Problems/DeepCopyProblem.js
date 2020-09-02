function deepCopy(p, c) {
	var c = c || {};
	for(let i in p) {
		if(typeof p[i] === 'Object') {
			c[i] = (p[i].constructor === Array) ? [] : {};
			deepCopy(p[i], c[i]);
		} else {
			c[i] = p[i];
		}
	}
	return;
}

var parent = {
	numbers: [1, 2, 3],
	letters: ['a', 'b', 'c'],
	obj: {
		prop: 1
	},
	bool: true
};