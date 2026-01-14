/*
Add to the prototype of all functions the method defer(ms), that runs the function after ms milliseconds.

After you do it, such code should work:

function f() {
  alert("Hello!");
}

f.defer(1000); // shows "Hello!" after 1 second
*/
function f() {
  alert("Hello!");
}
Function.prototype.defer = function(ms){ //adding methods in prototype of Function constructor
    setTimeout(f, ms);
}
f.defer(1000); // shows "Hello!" after 1 second
