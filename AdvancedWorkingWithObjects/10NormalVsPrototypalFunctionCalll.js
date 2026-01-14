// The difference between calls
// importance: 5
// Let’s create a new rabbit object:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");
These calls do the same thing or not?

rabbit.sayHi(); //Rabbit
Rabbit.prototype.sayHi(); //undefined
Object.getPrototypeOf(rabbit).sayHi(); //undefined
rabbit.__proto__.sayHi(); //undefined

/*
here rabbit object is created using prototype Rabbit.prototype,
Rabbit.prototype.sayHi is function accessible through that prototype,
In javascript this is decided based on how function is called, not where it is defined 
here when rabbit.sayHi() is called this represent rabbit object that is before dot which has key name hence it give result "Rabbit".
but when Rabbit.prototype.sayHi() is called then this will represent obj before dot which is Rabbit.prototype which does not have name as key property
similarly Object.getPrototypeOf(obj) give Rabbit.prototype which isa same as previous,
similarly rabbit.__proto__ give Rabbit.prototype which is same as previous
in last 3 case Rabbit.prototype does not have key name as property hence result will be undefined
*/
