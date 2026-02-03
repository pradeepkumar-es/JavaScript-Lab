/*
Custom Add Function
The goal is to develop a customAdd() function that performs addition or concatenation based on the input types provided. It should handle inputs intelligently, ensuring they are of the same type and managing special cases like booleans.

Functionality
Type Consistency: The function will check if the input arguments are of the same type. If not, it will raise an error.

Boolean Handling: When boolean values are passed as arguments, the function will convert them to numbers before performing addition.

String Concatenation: If both arguments are strings, the function will concatenate them instead of performing mathematical addition.

Expected Outcomes
Identical Types: If a and b are of the same type (and not booleans), customAdd(a, b) will return their sum or concatenation.

Type Mismatch: If a and b are of different types, customAdd(a, b) will throw an error with the text Arguments should be of the same type

Boolean Inputs: If a and b are booleans, customAdd(a, b) will convert them to numbers and return their sum.

By following these instructions, the customAdd() function will be robust and versatile, capable of handling various input types appropriately.

Make sure to export the customAdd() function using ESM syntax to make it available for the tests
*/
/* Create customAdd() function */
export function customAdd(a, b){
    if(typeof a != typeof b){
        throw new Error( `Arguments should be of the same type`);
    }
    if(typeof a == typeof b){
        if(typeof a == 'boolean' || typeof b == 'boolean') {
            return Number(a) + Number(b);
        }else if(typeof a == 'string' && typeof b == 'string'){
            return a + b;
        }else{
            return a + b;
        }
    }
}
/* Handle cases when the provided arguments are of different types */

/* Handle string concatenation if the provided arguments are strings */

/* Handle the edge case when the provided arguments are of type boolean */
