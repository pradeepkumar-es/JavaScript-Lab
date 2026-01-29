
/*
JavaScript: Array.prototype.every()
In this lab, you will create two utility functions using Array.prototype.every() method. allPositive() will check if all elements of an array are positive, and startsWithCapital() will check if all elements of an array of strings start with a capital letter.
*/
/*
 * Step 1: Create 'allPositive' function using array.prototype.every()
 * Step 2: Export 'allPositive' function
 * Step 3: Create 'startsWithCapital' function using array.prototype.every()
 * Step 4: Export 'startsWithCapital' function
 */
export function allPositive(array){
   return array.every((ele) => ele > 0);
}

export function startsWithCapital(array){
   return  array.every((ele) => ele[0] == ele[0].toUpperCase() );
