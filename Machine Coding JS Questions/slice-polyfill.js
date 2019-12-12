function myFunction() {
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    console.log(animals.mySlice());
    console.log(animals.mySlice(2));
    console.log(animals.mySlice(2, 4));
    console.log(animals.mySlice(2, -1));
    console.log(animals.mySlice(2, -2));
    console.log(animals.mySlice(-2, 2));
    console.log(animals.mySlice(-2, -2));

}

Array.prototype.mySlice = function mySlice(begin, end) {

    // to determine if end value is passed or not
    end = (typeof end !== 'undefined') ? end : this.length;

    // parameter required to be used
    var i, cloned = [], size, len = this.length;

    // to handle for negative begin
    var start = begin || 0;
    start = (start >=0) ? start : Math.max(0, start + len);

    // To make sure end is within the array length
    var upto = (typeof end === 'number') ? Math.min(end, len) : len;
    // to handle for negative end
    if(end < 0) {
        upto = len + end;
    }

    // expected size of the new array to be returned
    size = upto - start;

    if(size > 0) {
        cloned = new Array(size);
        if(this.charAt) {
            for(i = 0; i < size; i++) {
                cloned[i] = this.charAt[start + i];
            }
        } else {
            for(i = 0; i < size; i++) {
                cloned[i] = this[start + i];
            }
        }
    }
    return cloned;
}