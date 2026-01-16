// Strange instanceof
// importance: 5
// In the code below, why does instanceof return true? We can easily see that a is not created by B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true
/*
it's look starange but it is true, because instance does care about the function, rather its prototypes, it matches against prototype chain.
here it is coded to equalize both prototype as A.prototype = B.prototype = {}
since its prototype get match hence instanceof return true.
so by the logic of instanceof, prototype actually defines type, not the constructor function
*/
