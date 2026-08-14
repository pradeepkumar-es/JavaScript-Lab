/*
Implement a throttle function that takes a callback function and a delay time (in milliseconds) as arguments. The throttled function should ensure that the callback is executed at most once in the specified time period, regardless of how many times it's called.
Unlike debounce (which resets the timer with each call), throttle guarantees function execution at regular intervals while calls are being made.
Example
const throttledFn = throttle(() => console.log('Function called!"), 1000);
// If called multiple times in quick succession
throttledFn(); // Executes immediately
throttledFn(); // Ignored
throttledFn(); // Ignored
//... after 1000ms
throttledFn(); // Executes
throttledFn(); // Ignored
Constraints
The function should execute immediately on the first call
Subsequent calls within the delay period should be ignored
After the delay period, the next call should execute immediately
The throttled function should return the result of the callback function
Companies:
Google
Twitter Linkedin
Airbnb
 */

/**
 * Creates a throttled function that only invokes the provided function
 * at most once per every `delay` milliseconds
 *
 * @param {Function} func - The function to throttle
 * @param {number} delay - The number of milliseconds to throttle invocations to
 * @return {Function} Returns the new throttled function
 */
function throttle(func, delay) {
  // Write your code here
  let lastCall = 0; //initialized as 0 (beginnig of unix time) to call 1st call immediatley
  let lastResult;
  return function (...args) {
    let now = Date.now(); //this will be 17183232XXXXX in miliseconds
    const context = this; //if func is like obj.someMethod, then to preserve obj
    if (now - lastCall >= delay  ) { //if enough time has passed since previous call
      lastCall = now;
      lastResult = func.apply(context, args);
      return lastResult;
    }

    return lastResult; //return previous result if enough time has not passed
  }
}
const throttledFn = throttle(() => console.log('Function called!'), 1000);

// throttledFn("1")
// throttledFn("2")
// throttledFn("3")
// throttledFn("4")
// throttledFn("5")
module.exports = throttle;
