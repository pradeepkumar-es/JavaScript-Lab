// Error in setTimeout
// What do you think? Will the .catch trigger? Explain your answer.

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);


/*
no .catch will not trigger, because promise only catches the error of synchronous code, but here code is sceduled with 
setTimeout which give error later after executer function of Promise finsihed, and fulfilled so .catch will never trigger
*/

  /*
solution
The answer is: no, it won’t:

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);
As said in the chapter, there’s an “implicit try..catch” around the function code. So all synchronous errors are handled.

But here the error is generated not while the executor is running, but later. So the promise can’t handle it.
*/

