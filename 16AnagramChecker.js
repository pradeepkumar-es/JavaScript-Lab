/*

Anagram checker
Write a function areAnagrams(strOne, strTwo), which takes two strings: strOne and strTwo as arguments. The function should return true if the two strings are anagrams and false otherwise.

An anagram is a word or phrase formed by rearranging the letters of another word or phrase. In other words, two strings are considered anagrams if they have exactly the same characters but in a different order.

NOTE: The function areAnagrams should be case-insensitive

Example test cases
areAnagrams('cinema', 'iceman'); // Output: true
areAnagrams('restful', 'fluster'); // Output: true
areAnagrams('hello', 'world'); // Output: false
Hints
You should start by converting both strings to either lowercase or UPPERCASE. This will make it easier to compare them.
Once both strings are in the same case, you can find a way to use .sort() method on them. Keep in mind that .sort() can only be used on arrays.
The function should be exported properly using ESM Syntax.

1263457
export const areAnagrams = (strOne, strTwo) => {
	// Write your code here
	let strOneLowerCase = strOne.toLowerCase().split("").sort().join("");
	let strTwoLowerCase = strTwo.toLowerCase().split("").sort().join("");
	return strOneLowerCase == strTwoLowerCase;
}

https://codedamn.com/problem/KyQ2Hfs4cLsndY9oE8FkB?challenge-list=50-days-of-js
*/
export const areAnagrams = (strOne, strTwo) => {
	// Write your code here
	let strOneLowerCase = strOne.toLowerCase().split("").sort().join("");
	let strTwoLowerCase = strTwo.toLowerCase().split("").sort().join("");
	return strOneLowerCase == strTwoLowerCase;
}
