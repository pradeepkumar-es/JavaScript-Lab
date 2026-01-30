/*
Object.values
In this coding challenge, you will be implementing a function called getValues(object) that takes an argument: an object. The function should return an array will all of the object’s values.

Instructions
If the object has no values, return an empty array.
Example test cases
const object = { foo: 1, bar: 2, baz: 3 };
getValues(object); // Output: [1, 2, 3]

const object2 = { foo: 1, bar: 2 };
getValues(object2); // Output: [1, 2]

const object3 = {};
getValues(object3); // Output: []
Hints
You can use the built-in method .values() directly on the input array.
1238456791011
*/
export const getValues = (object) => {
	// Write your code here
	if(Object.values(object)){
		return Object.values(object);
	}else{
		return [];
	}
}
console.log(getValues({}));
/* Object.values(object) give real array, but map and set with these types of method give iterable objet */
