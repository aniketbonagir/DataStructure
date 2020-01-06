// 1. If we keep returning new function until all arguments of original function are not satisfied, then its called currying.
  
// function sum(a, b, c){
//   return a+b+c;
// };
// console.log( myCurry(sum)(1,2,3) ); // 6
// console.log( myCurry(sum)(1,2)(3) ); //6
// console.log( myCurry(sum)(1)(2)(3) ); //6
  
// So write a myCurry function.

let curriedSum = curry(sum);

alert( curriedSum(1, 2, 3) ); // 6, still callable normally
alert( curriedSum(1)(2,3) ); // 6, currying of 1st arg
alert( curriedSum(1)(2)(3) ); // 6, full currying

function sum(a, b, c) {
  return a + b + c;
}


function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}