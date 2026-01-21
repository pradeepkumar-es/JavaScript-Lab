/*
Random Numbers
Your task is to create a function which returns a random number in the given range of values both inclusive

Declare a function named randomNumberGeneratorInRange with two parameters: rangeStart and rangeEnd.

Inside the function, leverage Math.random() to generate a random number between 0 (inclusive) and 1 (exclusive).

Scale this number to the desired range. The method to do this involves a little bit of maths, but don’t worry! Here’s a hint. You'll have to use both of your parameters (rangeStart and rangeEnd) inside this step.

As JavaScript's Math.random() function does not provide whole numbers, you'll need to round down the resulting random number to the nearest whole number using Math.floor() function.

Finally, make sure your function returns the generated random number.

Use function calls to test your code and make sure it works as expected.

Happy Coding!
*/
function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
	let num = rangeStart + Math.floor( Math.random() * (rangeEnd - rangeStart +1 ));
	return num;
	/*
	here num will be generated with equal probablity
	code will be like 
	a+Math.floor(Math.random()*(b-a+1))
	a+Math.floor([0,1)*(b-a+1))
	a+Math.floor([0,b-a+1))
	a+[0,b-a];
	[a,b];
	*/
}
console.log(`My random number: ${randomNumberGeneratorInRange(100, 200)}`)
