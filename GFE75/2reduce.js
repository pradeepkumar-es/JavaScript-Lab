/*
Array.prototype.reduce is a way of "reducing" elements in an array by calling a "reducer" callback function on each element in order and passing along the return value from the previous callback. The final result of running the reducer across all elements of the array is a single value.

Implement Array.prototype.reduce. To avoid overwriting the actual Array.prototype.reduce, which is being used by the autograder, implement it as Array.prototype.myReduce.

Examples

[1, 2, 3].myReduce((prev, curr) => prev + curr, 0); // 6
[1, 2, 3].myReduce((prev, curr) => prev + curr, 4); // 10
Notes
There are some nuances in how Array.prototype.reduce works and what values are passed to the reducer callback. Read the specification for Array.prototype.reduce on MDN Docs before attempting.

Hints
New
Hint 1: Model the moving accumulator
Each visited element combines with the accumulator, and the callback's return value becomes the accumulator for the next visit. The final accumulator is the method's result.

Hint 2: Distinguish a missing seed
An omitted initial value is not the same as an explicitly supplied undefined. Use the call's argument count to decide whether a seed was provided.

Hint 3: Find the first present value
Without an initial value, seed the accumulator from the first present index and begin callbacks after it. If no present index exists, including in an all-hole array, the method must throw.

Hint 4: Traverse the original range
Capture the length, skip missing indices, and pass accumulator, value, index, and receiver to the reducer. Presence checks should still include inherited indexed properties.


*/

/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  // throw 'Not implemented!';
  let accumulator = initialValue;
  let startIndex = 0; //when initialValue is given

    if(this.length<1 && arguments.length < 2){
    throw "array should not be empty";
  }

  if (arguments.length < 2) {
    //or
    // if(accumulator === undefined){ //also coorect
let i = 0;
while(this[i] === undefined){
  i = i+1;
}
    accumulator = this[i]; //here this representing array

if(accumulator === undefined){
  throw "sparse Error should not have all holes"
}

    startIndex = i+1; //when initial value is not given, we are using array's 1st ele as initial value;
  }

  for (let i = startIndex; i < this.length; i++) {
    if(this[i] === undefined){
      continue;
    }
    accumulator = callbackFn(accumulator, this[i], i, this);
  }

  return accumulator;
};
