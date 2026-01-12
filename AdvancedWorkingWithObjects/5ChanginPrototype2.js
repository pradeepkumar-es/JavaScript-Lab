function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // ? 
//line 10 will be true because assignment to Rabbit.prototype will setups [[prototype]] for new objects, but it does not affect existing one
