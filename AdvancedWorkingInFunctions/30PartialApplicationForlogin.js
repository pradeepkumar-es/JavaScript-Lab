// What should we pass askPassword in the code below, so that it calls user.login(true) as ok and user.login(false) as fail?

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

//using partial function
askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?
// Your changes should only modify the highlighted fragment.

//using arrow function, here user gets from outer varaible and runs in normal way
// askPassword(()=>user.login(true), user.login(false)); // ?

