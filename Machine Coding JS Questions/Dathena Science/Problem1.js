// Create a Object for each array element and the value method should return the value.
// Note the value method should not be property of the object but part of prototype
function myFunction() {
    let A = [1, 2, 4];
    let res =  solution(A);
    // let res2 = solution('The quick brown fox jumps over the lazy dog', 39);
    
  console.log(res);

}

function solution(A) {
    let newT =A.map((ele, idx) => {
        let obj = new intCLass(ele, idx);
        return obj;
    });

    return newT;
    
}

function intCLass(x, index) {
    this.val = x;
    this.i = index;
}

intCLass.prototype.value = function value() {
    return this.val;
}
