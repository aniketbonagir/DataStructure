// Minimum Area Rectangle
// Leetcode || algoexpert(Rectangle Mania)

var minAreaRect = function(points) {
    const cordsTable = getCordsTable(points);
	return getRectangleCount(points, cordsTable);
};


function getRectangleCount(coords, cordsTable) {
	let rectArea = Infinity;
	for(const [x1, y1] of coords) {
		for(const [x2, y2] of coords) {
			if(!isUpperRt([x1, y1], [x2, y2])) continue;
			const upperCordStr = cordToString([x1, y2]);
			const rightCordStr = cordToString([x2, y1]);
			if(upperCordStr in cordsTable && rightCordStr in cordsTable) {
                const newArea = (y2-y1) * (x2-x1);
                if(rectArea > newArea) {
                    rectArea = newArea;
                }
            }
		}
	}
	return (rectArea == Infinity) ? 0 : rectArea;
}

function isUpperRt(cord1, cord2) {
	const [x1, y1] = cord1;
	const [x2, y2] = cord2;
	return (x2 > x1 && y2 > y1);
}

function getCordsTable(coords) {
	let coordsTable = {};
	for(const cord of coords) {
		const cordStr = cordToString(cord);
		coordsTable[cordStr] = true;		
	}
	return coordsTable;
}

function cordToString(cords) {
	let [x, y] = cords;
	return `${x}-${y}`;
}