/*
Remove falsy values
In this coding challenge, you will be implementing a function removeFalsey(arr) that accepts an array arr and returns a new array containing only the truthy values.
A value is considered truthy if it is NOT one of the following: false, null, undefined, 0, NaN, or an empty string.

Instructions
The input array may contain any number of values, including zero.
The returned array should only contain truthy values.
The original input array should not be modified.
Example test cases
const arr = [0, 1, false, 2, '', 3];
const result = removeFalsy(arr);
console.log(result); // should log [1, 2, 3]

Should return an empty array for an empty array input
Should remove all falsy values from the input array
Should keep truthy values that are not falsey
Should not modify the original input array
Should return a new array, not modify the original input array
*/
export const removeFalsy = (arr) => {
	// Write your code here
	if(arr.length == 0) {
		return [];
	}
	// console.log(arr);
	// let truthyArr = arr.filter((item)=>Boolean(item) == true); //1st approach
	let truthyArr = arr.filter((item)=>(!!item) == true); //2nd Approach, first ! convert value to its opposite of Boolean false/true of truthy/falsy value, 2nd will convert back to Boolean representation true or false we want for truthy/false
	// console.log(arr);
	return truthyArr;
}

//3rd Appraoch using array and loop
export const removeFalsy2 = (arr) => {
	// Write your code here
	if(arr.length == 0) {
		return [];
	}
	const truthyArr = [];
	for(let ele of arr){
		if(ele){
			truthyArr.push(ele)
		}
	}
	return truthyArr;
}
// const arr = [0, 1, false, 2, '', 3];
// const result = removeFalsy(arr);
// console.log(result); // should log [1, 2, 3]
