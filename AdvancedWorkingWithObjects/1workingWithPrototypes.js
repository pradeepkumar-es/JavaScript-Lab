let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1) //true, taken from rabbit

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2) //null // now rabbit has not own jumps, taken from prototype animal

delete animal.jumps;

alert( rabbit.jumps ); // ? (3) //undefined // bcz it jumps property is also deleted from prototype animal, there is no more jumps anymore