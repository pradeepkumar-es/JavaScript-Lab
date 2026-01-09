// Can we change this by additional binding?

// What will be the output?

function f() {
  alert(this.name);
}

f = f.bind( {name: "John"} ).bind( {name: "Ann" } );

f();
/*
output will be "John", because bound function object returned by f.bind(...) only remembers the context and arguments (if provided) at the creation time, morever 
function rebinf is not allwoed hence only 1st binding cotext is used;
*/
