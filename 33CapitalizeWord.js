/*
Capitalise a word
Implement a function called capitalizeWord(word) that capitalizes the first letter of the input string word and returns the capitalized string.

Instructions
The function should return a new string with the first letter capitalized.
If the input is an empty string, return an empty string.
The input will always be a string consisting of one word, and will not contain numbers or special characters.
Transform only the first character, leaving the rest unchanged.
Example test cases
capitaliseWord('hello'); // Output: 'Hello'
capitaliseWord('mom'); // Output: 'Mom'
capitaliseWord('dAD'); // Output: 'DAD'
Hints
Use the toUpperCase method.
*/
export const capitaliseWord = (word) => {
	// Write your code here
	if(word.length == 0) {
		return "";
	}
	return word[0].toUpperCase() + word.slice(1);
};

console.log(capitaliseWord("hello")); // Output: 'Hello'
console.log(capitaliseWord("mom")); // Output: 'Mom'
console.log(capitaliseWord("dAD")); // Output: 'DAD'
