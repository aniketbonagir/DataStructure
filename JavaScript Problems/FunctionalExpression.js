/*
function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
alert(foo());

function foo(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}
alert(foo());

alert(foo());
function foo(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}

function foo(){
    return bar();
    var bar = function() {
        return 3;
    };
    var bar = function() {
        return 8;
    };
}
alert(foo());

*/




// If you didn’t answer 8, 3, 3 and [Type Error: bar is not a function]