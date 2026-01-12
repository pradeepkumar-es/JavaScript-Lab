function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // ?
//line 10 will be false, bcz when rabbit object is created, this happen => rabbit.[[prototype]] -> Rabbit.prototype which has {eats: true}
//so internally rabbit -> [[prototype]]->{eats:true}, since in question value eats is directly updated, hence rabbit.eats will so same updated value bcz rabbit object and function object both
//are referring to the same value

// Objects are assigned by reference. The object from Rabbit.prototype is not duplicated, it’s still a single object referenced both by Rabbit.prototype and by the [[Prototype]] of rabbit.

// So when we change its content through one reference, it is visible through the other one.
