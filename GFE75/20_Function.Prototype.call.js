/*
The Function.prototype.call() method calls the function with a given this value and arguments provided individually.

Source: Function.prototype.call() - JavaScript | MDN

Implement your own Function.prototype.call without calling the native call method. To avoid overwriting the actual Function.prototype.call, implement the function as Function.prototype.myCall.

Examples

function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

multiplyAge.myCall(mary); // 21
multiplyAge.myCall(john, 2); // 84
Hints
New
Hint: Which value is the callable?
Inside fn.myCall(context, a, b), distinguish the method's own this from the receiver that fn should observe. Which allowed invocation primitive can connect those two roles and still pass a and b separately?
*/

/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */
Function.prototype.myCall = function (thisArg, ...argArray) {
  const key = Symbol(); // give unique identifier different from string
 
 //edge case
 if(thisArg == null){ //check whether thisArg either undefined or null because == (not ===) give true in both case
 thisArg = globalThis; //this is globalobject in node.js or window in browser
 }else{ //primive case
 thisArg = Object(thisArg); //makes an wrapper object representing actucal object
 }

  thisArg[key] = this; //temporarily setting multiplyAge to the marray to make callable,  here this is our fucntion => multiplyAge
  //under the hood, when we call multiplyAge.myCall(), we are inheriting myCall from Function.prototype
  //and functions inherit from Function.prototype and function is itself an object
  const result = thisArg[key](...argArray); //here we are calling multiplyAge
  delete thisArg[key] // we are removing multiply age from (ex. marry object) so that original marry is reserved or not mutated
  return result; //return the result from multiplyAge()
};
