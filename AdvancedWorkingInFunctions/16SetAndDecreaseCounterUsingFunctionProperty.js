function makeCounter() {
  // instead of:
  // let count = 0

  function counter() {
    return ++counter.count;
  };

  counter.count = 0;
  counter.set = function(value) { //added code using function property //functiion is object so we can set property to it
      counter.count = value
  }
  counter.decrease = function () { //added code using function property / function is object so we can set the property to it
      return --counter.count;
  }
  return counter;
}

let counter = makeCounter();
/*
Modify the code of makeCounter() so that the counter can also decrease and set the number:

counter() should return the next number (as before).
counter.set(value) should set the counter to value.
counter.decrease() should decrease the counter by 1.
P.S. You can use either a closure or the function property to keep the current count. Or write both variants.
*/
alert( counter() ); //1
alert( counter.set(10) ); //undefined
alert( counter.count); //10
alert( counter.decrease() );  //9
