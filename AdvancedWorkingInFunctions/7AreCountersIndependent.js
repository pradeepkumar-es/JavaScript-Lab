function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ? 
alert( counter2() ); // ? 
/*
line 15 and 16 will output 0 and 1, 
counter and counter2 are independent because they are created from differnt invocation of makeCouter() and hence they have different outer lexical environment and hence they their own count hence
output same
*/
