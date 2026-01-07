function makeArmy() {
  let shooters = [];
  let i = 0;
  while (i < 10) {
      let j = i; //fixed or added code to work as intended
    let shooter = function() { // create a shooter function,
     alert( j ); // that should show its number   
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3... why ? fix the code
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.
/*
before adding code of line 5, shooters array contain function with alert(i) since there is no local i in their lexical environment 
and hence after function finishes it takes value of i from outer lexical environment which have been updated to 10 at time of calling this function.
during function creation there is also different lexical environment is created but all Is in taken from outer lexical envronment, so if we copy i in j in iteration 
then during each lexical environment creation, each will have their own j with current i at the time of creation so when function called later then their j in alert will refer to 
their own lexical environment which has different value, hence they will print as intended. 0,1,2, so on
*/
