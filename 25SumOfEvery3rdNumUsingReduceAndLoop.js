/*
Sum every third number
Write a function sumOfThirds(arr), which takes an array arr as an argument. This function should return a sum of every third number in the array, starting from the first one.

Instructions
If the input array is empty or contains less than 3 numbers then return 0.
The input array will contain only numbers.
Example test cases
sumOfThirds([1, 1, 1, 2, 2, 2, 3, 3, 3]); // Output: 6
sumOfThirds([]); // Output: 0
sumOfThirds([-5, 0, 5, -4, 1, 6, -3, 2, 7]); // Output: -12
Hints
You can use the built-in method .reduce().
*/
//using loop
export const sumOfThirds = (arr) => {
	// Write your code here
	//edge case 
	if(arr.length == 0 || arr.length <= 3) {
		return 0;
	}

	let res = arr[0];
	for(let i = 3; i < arr.length; i += 3){
		res += arr[i];
	}
	return res;
}

let ans = sumOfThirds([-5, 0, 5, -4, 1, 6, -3, 2, 7]);
console.log(ans); //-12

//using reduce method
export const sumOfThirds1 = (arr) => {
	// Write your code here
	//edge case 
	if(arr.length == 0 || arr.length <= 3) {
		return 0;
	}

	let res = arr.reduce(function (accumulator, ele, index, array) {
		if(index % 3 == 0){ //we will only add the ele which index is either 1st or 3rd on every next, means index will be multiple of 3, including 0th index
			return accumulator + ele
		}else{
			return accumulator;
		}
	}, 0)
	return res;
}

let ans1 = sumOfThirds1([-5, 0, 5, -4, 1, 6, -3, 2, 7]);
console.log(ans1); //-12
