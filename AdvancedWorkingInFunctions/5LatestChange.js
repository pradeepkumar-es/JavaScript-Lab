let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?
/*
"Pete", since function is executed after the name variable update hence it will take latest value from own lexical environment or outer
*/
