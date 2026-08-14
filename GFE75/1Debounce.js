/*
Debouncing controls how often a function can execute over time. When a JavaScript function is debounced with a wait time of wait milliseconds, it runs only after wait milliseconds have elapsed since the debounced function was last called.

You have probably encountered debouncing in daily life before, such as when entering an elevator. Only after some time passes without pressing the "Door open" button (the debounced function not being called) will the elevator door actually close (the callback function is executed).

Implement debounce(func, wait) so that func is called only after wait milliseconds have passed since the most recent call. The returned function should not invoke func immediately. When the delayed call finally runs, it should use the latest arguments and preserve the this value from the most recent call.

Arguments
func (Function): The callback to debounce.
wait (number): The number of milliseconds to wait after the latest call.
Returns
(Function): Returns the debounced function.

Examples

let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.

// t = 100: increment() was invoked and i is now 1.
debouncedIncrement() is called multiple times.


let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.
//  Call debouncedIncrement() again.
debouncedIncrement(); // i = 0

// t = 100: i is still 0 because it has only
//  been 50ms since the last debouncedIncrement() at t = 50.

// t = 150: Because 100ms have passed since
//  the last debouncedIncrement() at t = 50,
//  increment was invoked and i is now 1.
Follow-up
Debounce with a cancel() method to cancel delayed invocations and a flush() method to immediately invoke them.
Implement throttle, which is similar to debounce but a little different.
Reading
Debounce on Lodash Documentation
Hints
New
Hint 1: Represent one pending trailing call
The closure should contain at most one active timeout. Every wrapper invocation cancels that timeout and schedules a replacement, so the quiet period is measured from the most recent call.

Hint 2: Preserve the latest call shape
The scheduled work needs the arguments and this from the call that created the current timeout. Invoke the original function with both when that timeout finally fires.

Hint 3: Keep the wrapper dynamically bound
Return a normal function so its receiver comes from each call site; an arrow function would capture the wrong this. A zero wait still uses the timer queue and must not invoke the callback synchronously.

*/

/**
 * @param {(...args: Array<unknown>) => unknown} func
 * @param {number} wait
 * @returns {(...args: Array<unknown>) => void}
 */
export default function debounce(func, wait) {
  //put it outer of returned function so that we can remember it using closure between
  //different calls of returned function 
  let timeoutId = null; 
  return function(...args){
    clearTimeout(timeoutId); //first of all clearout preveious call for reschedule call for current call
    const context = this; //preserve the context if func is like obj.someMethod to preserve object
    
    timeoutId = setTimeout(()=>{
      timeoutId = null; //when func finished execution, reset to null, although not necessary
      func.apply(context, args); 
      //or func.call(context, ...args);
    }, wait)
  }
  // throw 'Not implemented!';
}