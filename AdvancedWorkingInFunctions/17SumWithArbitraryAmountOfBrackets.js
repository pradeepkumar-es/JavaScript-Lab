/*
Write function sum that would work like this:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
*/
function sum(num1) {
    let currentSum = num1;
    function f(num2) {
        currentSum += num2;
        return f; ///for chaining
    }
    f.toString = function() { //this will work when we get assignment == (or we want to print)
        return currentSum;
    };
    return f; // return f to print
}
let r1 = sum(1)(2)(3) //6 
console.log(r1);
