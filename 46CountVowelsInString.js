/*
Count vowels
Write a function countVowels(str), which takes a string str as an input. This function should return the total number of vowels in str.

Instructions
Return 0 if str has no vowels.
Assume that str may contain any alphanumeric characters.
Example test cases
countVowels("Hello world!"); // Output: 3
countVowels("This is a test"); // Output: 4
countVowels("No vowels here"); // Output: 0
*/

export const countVowels = (str) => {
	// Write your code here
	let count = 0
	for(let char of str){
		let ch = char.toLowerCase();
		if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
			count += 1;
		}
	}
	return count;
}
