function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // ?
alert( counter.up() ); // ?
alert( counter.down() ); // ?
/*
line 14, 15, and 16 will output 1, 2, and 1 respectively bcz both nested function is created using the same lexical environment and share access to same variable count.
*/
