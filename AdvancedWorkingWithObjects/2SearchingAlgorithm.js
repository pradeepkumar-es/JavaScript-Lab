let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__:head, //answered added code
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__:table, // //answered added code
};

let pockets = {
  money: 2000,
  __proto__:bed,  //answered added code
};
// Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, 
//pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head). in the question object initially given normal object
// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
alert(pockets.pen); //3
alert(bed.glasses); //1
//for performace-wise there is no difference in searching from object itself or prototype, value get remembered where the property is found and 
//next time when called it get reused // for instance, for pockets.glassses they remembere glasses is found in head, and next search happen they request
//from there (head), internal caching optimize this performance.
