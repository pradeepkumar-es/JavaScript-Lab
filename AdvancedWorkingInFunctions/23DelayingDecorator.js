/*
Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.
*/
function f(x) {
  alert(x);
}
function delay(func, time) {
    function wrapper(args) {
        setTimeout(()=>func.call(this, args), time);
    }
    return wrapper;
}
// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms
