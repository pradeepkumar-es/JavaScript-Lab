let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); ?
/*
result of sayHi() will be an error bcz sayHi function is declared inside if so it only lives inside. there is no sayHi function declaration outside it 
morever it's lexical environment does not have sayHi
*/
