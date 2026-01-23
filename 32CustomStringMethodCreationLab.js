/*
JavaScript String Methods Lab
In this lab, you will practice using JavaScript string methods by implementing four different functions that manipulate and analyze strings. Use ESM syntax to create and export the functions from your index.js file. Work directly within the provided boilerplates to complete the challenges!

Make sure to export all the 4 functions that you've created in this lab
Create a function `reverseString` that takes a string as an argument and returns the reversed string.
Create a function `capitalizeFirstLetters` that takes a string as an argument and capitalizes the first letter of each word.
Create a function `findLongestWord` that takes a string as an argument and returns the longest word.
Create a function `wordCount` that takes a string as an argument and returns the number of words in the string.
*/
export function reverseString(str) {
	// Your code here
	return str.split("").reverse().join("");
}

export function capitalizeFirstLetters(str) {
	// Your code here
	const strArr = str.split(" ");
	const captalizedStrArr = strArr.map(word => word[0].toUpperCase() + word.slice(1));
	return captalizedStrArr.join(" ");
}

export function findLongestWord(str) {
	// Your code here
	const strArr = str.split(" ");
	let longestLength = strArr[0].length;
	let longestWord = strArr[0];
	for(let i = 1; i < strArr.length; i++){
		if(strArr[i].length > longestLength){
			longestLength = strArr[i].length;
			longestWord = strArr[i];
		}
	}
	return longestWord;
}

export function wordCount(str) {
	// Your code here
	const strArr = str.split(" ");
	return strArr.length;
}

