//  Check If It Is a Straight Line - Leetcode

var checkStraightLine = function(coordinates) {
    if(coordinates.length === 2)
        return true;
    const slope = computeSlope(coordinates[0], coordinates[1]);
    for(let i=1; i< coordinates.length-1; i++) {
        let nSlope = computeSlope(coordinates[i], coordinates[i+1])
        if(slope !== nSlope)
            return false;
    }
    return true;
};

function computeSlope(cord1, cord2) {
    const [x1,y1] = cord1;
    const [x2,y2] = cord2;
    if(x2-x1 == 0) return 0;
    return Math.floor((y2-y1)/(x2-x1));
}