// Re-resolve a promise?
// What’s the output of the code below?

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
/*result will be 1, only first resolve/reject callback argument is executed in the executer finction, rest is ignored*/
