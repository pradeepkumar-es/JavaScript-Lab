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
