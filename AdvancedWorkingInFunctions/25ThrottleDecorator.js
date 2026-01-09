function f(a) {
  console.log(a);
}
function throttle(func, time) {
    let isThrottle = false, savedArgs, saveThis;
    function wrapper() {
        if(isThrottle) { //(2) // it will get override by latest call (here (3))
            saveArgs = arguments;
            saveThis = this;
            return;
        }
        isThrottle  = true;
        func.apply(this, arguments); //(1)
        setTimeout(()=>{
            isThrottle = false;
            if(saveArgs){ //if there is function call happen during cooldown period (here latest call, earlier called get overied by latest)
                wrapper.apply(saveThis, saveArgs); //wrapper is called to reset new cooldown period to make sure in each 1000ms there is run function at max one time
            }
            saveArgs = saveThis = null;
        }, time)
    }
    return wrapper;
}
// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);

f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored
//throttle decorator return wrapper than ensure our function will only run at max one time until cooldown period time, if func call happen frequenly during cooldownperiod then it is ignored and 
//latest call run when given specified time reaches or cooldown period ends 
