//prinitng numbers in given range in each seconds using setTimeout
function printNumbers(from, to) {
    let timerId = setTimeout(function func() {
        console.log(from++);
        timerId = setTimeout(func, 1000);
        if(from > to) {
            clearTimeout(timerId);
        }
    }, 1000)
}
printNumbers(12, 25)

//printing numbers in given range in each seconds using setInterval
function printNumbers(from, to) {
    let timerId = setInterval(()=>{
     console.log(from++)   
         if(from > to) { //this should be inside callback to run every seconds to check the conditions, if it will be outside then it will run once before interval and never checks the condition and and setInterval keep consoleing forever
        clearInterval(timerId);
    }
    }, 1000);
    // let timerId = setTimeout(function func() {
    //     console.log(from++);
    //     timerId = setTimeout(func, 1000);
    //     if(from > to) {
    //         clearTimeout(timerId);
    //     }
    // }, 1000)
}
printNumbers(12, 25)
