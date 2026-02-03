/*
JavaScript Generators Lab
In this lab, you'll be learning about JavaScript generator functions. A generator function is a special type of function that can be paused and resumed, allowing for greater control over the execution of the function. You'll be creating a generator function that counts upwards from 1 up to a given limit, and you'll iterate over that generator to print the values. With this lab, you'll gain a better understanding of how to create and use generator functions in JavaScript.

If you've never heard of Generators, go through the Documentation to understand the basic usage of Generators

Make sure to export the function using ESM syntax, the export function will be used for running the tests
Create a generator function called 'countUp' that will count upwards from 1 up to the given limit.
The 'countUp' generator function should take a limit argument.
Create an instance of the generator using limit 5, and store it in a variable called 'counter'.
Iterate over the 'counter' generator and print each value (1-5) using a `for ... of` loop and console.log.

*/
console.log('JavaScript Generators Lab')

// Create your generator function and use it below
export function* countUp(limit){
    for(let i = 1; i <= limit; i++){
        yield i;
    }
}
let counter = countUp(5); //calling genrator function will return an generator object having method next() which will handle the execution
                        // generator object return will be also iterable
for(let count of counter){
    console.log(count);
}
