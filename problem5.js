  // cons(a, b) constructs a pair, and car(pair) and 
  // cdr(pair) returns the first and last element of that pair.
  // For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) 
  // returns 4.

let res1 = car(cons(3, 4));
res1

let res2 = cdr(cons(3, 4));
res2

function cons(a, b) {
  function pair(f) {
    return f(a, b)
  };

  return pair;
}

function car(pair) {
  function getFirstParam(a, b) {
    return a;
  }  
  return pair(getFirstParam);
}

function cdr(pair) {
  function getsecondParam(a, b) {
    return b;
  }  
  return pair(getsecondParam);
}