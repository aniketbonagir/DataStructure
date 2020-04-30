// 1. bind is used to return new function with new context. Its syntax is function.bind(newThis, arg1, arg2) etc. 
// e.g.
  
var obj = {
 name: "john",
 getInfo: function(city, state){
 console.log("Hello my name is " + this.name + " and i am from " + city + ", " + state );
 }
};
var newFunc = obj.getInfo.bind({name: "jenny"}, 'denver');
newFunc('colarado'); //prints: Hello my name is jenny and i am from denver, colarado'
  
  
function myBind(){
  var argsArr = Array.prototype.slice.call(arguments);
  var fn = this;
  var newThis = argsArr[0];
  var params = argsArr.slice(1);
  return function(){
    var arr = Array.prototype.slice.call(arguments);
    return fn.apply(newThis, params.concat(arr));
  }
}