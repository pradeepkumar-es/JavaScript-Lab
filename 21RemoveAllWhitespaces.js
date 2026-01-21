/*
Remove all whitespaces
In this coding challenge, you will be implementing a function called removeWhitespaces(string) that takes a string as the input. The function should return the string with all the whitespace removed.

Instructions
If the input string is empty, then return an input string.
Remember to account for \n and \t.
Example test cases
removeWhitespaces('Hello,   World!'); // Output: 'Hello,World!'
removeWhitespaces('  This is a sentence.\nIt contains some whitespace.  '); // Output: 'Thisisasentence.Itcontainssomewhitespace.'
removeWhitespaces('\t  \n\n'); // Output: ''
*/
export const removeWhitespaces1 = (string) => {
	// Write your code here
	//using loop
	if(string.length == 0){
		return "";
	}
	let res = "";
	for(let i = 0; i < string.length; i++){
		if(string[i] != " " && string[i] != "\n" && string[i] != '\t'){
			res += string[i];
		}
	}
	return res;
}

//2nd approach: using regex
export const removeWhitespaces2 = (string) => {
	// Write your code here
	//using regex (regular expression) which has format /pattern/flags
	return string.replace(/\s/g, "");
	//here \s means all whitespace characters like new line(\n), tab (\t), spaces(" "), etc.
	//here g means global: all occurence of such thing not just first match
	//so here replace method matches all occurance of white space character and replace with empty string "";
}
