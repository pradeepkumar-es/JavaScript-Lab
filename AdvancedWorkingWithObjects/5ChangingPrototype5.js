function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // ? 
//answer will be undefined, bcz rabbit.[[prototype]] -> Rabbit.prototype->{eats:true}
/*since here prototypal object property is deleted, and rabbit object does not have own eats property as well as proptotypal eats hence result will be undefined*/
/*undefined when:
Property not present in object or prototype

Error when:

Variable not declared
OR accessing property of null / undefined*/
