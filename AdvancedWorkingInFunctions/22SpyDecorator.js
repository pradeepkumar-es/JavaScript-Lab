/*
Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.
Every call is saved as an array of arguments.

*/
function work(a, b) {
  alert( a + b ); // work is an arbitrary function or method
}
function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args)
        // return func.call(this, ...args);//or 
        return func.apply(this, args);
    }
    wrapper.calls = []; //always set property outside the function object, if set inside then property will reset or redefined everytime function is called  
    return wrapper;
}
work = spy(work);
work(1, 2); // 3
work(4, 5); // 9
work(8, 9); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
