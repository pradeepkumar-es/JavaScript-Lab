function sum(a){
    return function(b) {
        return a + b
    }
}
let r1 = sum(1)(2) 
console.log(r1); // 3
let r2 = sum(5)(-1) 
console.log(r2); // 4
/*when function is called with 1st parenthesis it's argument is remembered by closure function and return a function and when next time returned function is 
called with 2nd parenthesis and argument then remembered argument is used for calculation
*** in other word, inner function is taking a from outer lexical environment
*/
