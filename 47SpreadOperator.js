/*
Using spread operator in function parameter
In this lab, you will create a JavaScript function called sum that uses the spread operator when defining the paramemter args to accept any
number of arguments and calculates their sum. The function should be exported for testing purposes.
JavaScript's spread operator (...) allows you to expand iterable elements like arrays or strings.
It's useful when you want to collect any number of arguments passed to a function or when you want to spread elements among different arrays or objects.
*/

// Create your sum function here.
export function sum(...args){
    let sum = 0;
    for(let ele of args){
        sum += ele;
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5)); // returns 15
console.log(sum(2, 342, 54, 2, 51)); // returns 451
console.log(sum(1, 12, 34, 2, 42, 12)); // returns 103
