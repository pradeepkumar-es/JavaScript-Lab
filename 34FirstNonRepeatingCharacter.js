/*
First non-repeating character
Write a function findCharacter(str), which takes a string str as the argument. The function should return the first non-repeating character.

Instructions
If no such character is found, return null.
The input string str will not contain whitespace.
Example test cases
findCharacter("hello"); // Output: "h"
findCharacter("abbcddee"); // Output: "a"
findCharacter("aabbcc"); // Output: null
Hints
You should start by building a frequency counter object.
*/
export const findCharacter = (str) => {
	// Write your code here
	//using plain object
	const obj = {};
	for(let char of str){
		if(!obj[char]){
			obj[char] = 1;
		}else{
			obj[char] = obj[char] +1;
		}
	}
	for (let char in obj){ //string key in object follow insertion order, and number key follow numerical order, hence whenever first non-repeating charcter achived it will work
		if(obj[char] == 1){
			return char;
		}
	}
	return null;
}

//2nd Approach using map method
export const findCharacter = (str) => {
	// Write your code here
	//using plain object
	const map = new Map();
	for(let char of str){
		if(!map.has(char)){
			map.set(char, 1);
		}else{
			map.set(char, map.get(char) + 1);
		}
	}
	for (let entries of map){ //string key in object follow insertion order, and number key follow numerical order, hence whenever first non-repeating charcter achived it will work
		if( entries[1] == 1){
			return entries[0];
		}
	}
	return null;
}
