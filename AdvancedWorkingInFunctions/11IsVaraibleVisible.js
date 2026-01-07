let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();
/*
line 4 will output Reference error: variable x can not be accessed before intialization,
when function is executed, it's lexical environment have variable x and it will use from there not from outer lexical environment and known to engine but it is unintialized state until let comes 
(also called temporal dead zone).  hence it can be used before intialization
if we remove line 6 let x = 2, then x will be accesed from outer lexical environment and there will be no error
*/
