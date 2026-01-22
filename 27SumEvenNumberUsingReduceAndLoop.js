/*
Sum even numbers
Write a function sumOfEvens(arr), which takes an array arr as an argument. This function should return a sum of every even number in the array.

Instructions
If the input array is empty or there are no even numbers, then return 0.
The input array will contain only numbers.
Example test cases
sumOfEvens([1, 1, 1, 2, 2, 2, 3, 3, 3]); // Output: 6
sumOfEvens([]); // Output: 0
sumOfEvens([-5, 0, 5, -4, 1, 6, -3, 2, 7]); // Output: 8
Hint
You can use the built-in method .reduce() or a for loop

Make sure you export the function for writing the tests
*/

export const sumOfEvens = (arr) => {
	// Write your code here
	//using loop
	if(arr.length == 0){
		return 0;
	}
	let res = 0;
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] % 2 == 0) {
			res += arr[i];
		}
	}
	return res;
}

//using reduce method
export const sumOfEvens1 = (arr) => {
	// Write your code here
	//using loop
	if(arr.length == 0){
		return 0;
	}
	let res = arr.reduce((sum, item, index, array)=>{
		if(item % 2 == 0){
			return sum + item; //it get returned and stored in accumulator sum for next call and used as an sum argument for that
		}else{
			return sum; //similary same way
		}
	}, 0)
	return res;
}
