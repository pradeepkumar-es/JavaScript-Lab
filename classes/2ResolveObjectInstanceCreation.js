/*
Error creating an instance
importance: 5
Here’s the code with Rabbit extending Animal.

Unfortunately, Rabbit objects can’t be created. What’s wrong? Fix it.

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
alert(rabbit.name);
*/
class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name) //added code // 
    // this.name = name; //modified code
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined when super is not called in derived constructor, and after adding result will be White Rabbit
alert(rabbit.name);
/*
we must call super in derived constructor before using this, otherwise parent constructor will not execute
and object for this won't be created
*/
