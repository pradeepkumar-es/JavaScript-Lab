// We have rabbit inheriting from animal.

// If we call rabbit.eat(), which object receives the full property: animal or rabbit?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();
let descriptor = Object.getOwnPropertyDescriptors(animal);
let descriptor2 = Object.getOwnPropertyDescriptors(rabbit);
console.log(descriptor);
/*
{
  eat: {
    value: [Function: eat],
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/
console.log(descriptor2);
/*
{
  full: { value: true, writable: true, enumerable: true, configurable: true }
}

*/
// as from result from descriptor, rabbit get full property because when rabbit.eat() is called then this in methods will represent rabbit object not animal, and hence full property is set to the rabbit
//morever animal object will have only eat methods there is full property of it
/*
more clear answer
The answer: rabbit.

That’s because this is an object before the dot, so rabbit.eat() modifies rabbit.

Property lookup and execution are two different things.

The method rabbit.eat is first found in the prototype, then executed with this=rabbit.



*/
