/*
Class extends Object?
importance: 3
As we know, all objects normally inherit from Object.prototype and get access to “generic” object methods like hasOwnProperty etc.

For instance:

class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

// hasOwnProperty method is from Object.prototype
alert( rabbit.hasOwnProperty('name') ); // true
But if we spell it out explicitly like "class Rabbit extends Object", then the result would be different from a simple "class Rabbit"?

What’s the difference?

Here’s an example of such code (it doesn’t work – why? fix it?):

class Rabbit extends Object {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

alert( rabbit.hasOwnProperty('name') ); // Error

*/

class Rabbit extends Object {
  constructor(name) {
      super(); // Added code
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

alert( rabbit.hasOwnProperty('name') ); // Error => after adding super(), result will be true
/*
Error is coming because Rabbit is an inheriting class, and inheriting must call super to execute parent constructor otherwise this will be undefined
*/
/*
But that’s not all yet.

Even after the fix, there’s still an important difference between "class Rabbit extends Object" and class Rabbit.

As we know, the “extends” syntax sets up two prototypes:

Between "prototype" of the constructor functions (for methods).
Between the constructor functions themselves (for static methods).
In the case of class Rabbit extends Object it means:

class Rabbit extends Object {}

alert( Rabbit.prototype.__proto__ === Object.prototype ); // (1) true
alert( Rabbit.__proto__ === Object ); // (2) true
So Rabbit now provides access to the static methods of Object via Rabbit, like this:

class Rabbit extends Object {}

// normally we call Object.getOwnPropertyNames
alert ( Rabbit.getOwnPropertyNames({a: 1, b: 2})); // a,b
But if we don’t have extends Object, then Rabbit.__proto__ is not set to Object.

Here’s the demo:

class Rabbit {}

alert( Rabbit.prototype.__proto__ === Object.prototype ); // (1) true
alert( Rabbit.__proto__ === Object ); // (2) false (!)
alert( Rabbit.__proto__ === Function.prototype ); // as any function by default

// error, no such function in Rabbit
alert ( Rabbit.getOwnPropertyNames({a: 1, b: 2})); // Error
So Rabbit doesn’t provide access to static methods of Object in that case.

By the way, Function.prototype also has “generic” function methods, like call, bind etc. They are ultimately available in both cases, because for the built-in Object constructor, Object.__proto__ === Function.prototype.

Here’s the picture:


So, to put it short, there are two differences:

class Rabbit	class Rabbit extends Object
–	needs to call super() in constructor
Rabbit.__proto__ === Function.prototype	Rabbit.__proto__ === Object


*/
