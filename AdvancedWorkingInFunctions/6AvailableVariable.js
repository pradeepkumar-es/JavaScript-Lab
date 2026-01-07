function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?
/* "Pete" , when work() function is called then it will take variable from its current lexical environment or outer not from outer outer's outer. in other word it will take variable from most
closest lexical environment possible*/
