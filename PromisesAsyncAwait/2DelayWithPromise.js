/*
Delay with a promise
The built-in function setTimeout uses callbacks. Create a promise-based alternative.

The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

function delay(ms) {
  // your code
}

delay(3000).then(() => alert('runs after 3 seconds'));
*/
//1st approach using regular executer function
function delay(ms) {
  // your code
  return new Promise(function(resolve, reject){
      setTimeout(()=>resolve(), ms) //here we don't pass any argument bcz we are ensuring delay only, not returing the result
  })
}

delay(3000).then(() => alert('runs after 3 seconds'));

//2nd way: using arrow function as executer, so that we do not need run resolve with arrow function inside setTimeout for delay bcz we are already using arrow function
// which has not their own this, and will be taken from outer lexical environment
function delay1(ms) {
  return new Promise(resolve=>setTimeout(resolve, ms));
}
delay1(3000).then(()=>alert("run after 3 seconds));
