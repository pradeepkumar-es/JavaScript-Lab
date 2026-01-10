// We have two hamsters: speedy and lazy inheriting from the general hamster object.

// When we feed one of them, the other one is also full. Why? How can we fix it?

let hamster = {
//   stomach: [], no need any more

  eat(food) {
    // this.stomach.push(food); // no need any more
    this.stomach = food;  //added code // method 2
  }
};

let speedy = {
  __proto__: hamster,
//   stomach:[] //added code // method 1
};

let lazy = {
  __proto__: hamster,
//   stomach:[], //added code // method 1
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple
//this happening like this because, when speedy.eat("apple") is called then in method this will represet speedy object
// but when stomach is come for push , there are no stomach in speedy object hence stomach array of hamster object is used and apple is pushed to it. 
//   in the same way when we try to get lazy.stomach it will also get apple without feeding lazy because there is also no own stomach,
//   and same prototypal stomach is used or shared stomach is used. hence feeding one also feed others
// //to fix this issue either introduce own stomach in every inherited object or use assignment operator to feed instead of array, 
// bcz assignment operator create property stomach in feeding object only not in other object or prototype
