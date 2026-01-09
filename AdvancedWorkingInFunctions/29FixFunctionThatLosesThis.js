function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

// askPassword(user.loginOk, user.loginFail); //changed this line only to work properly ?
askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); //changed line//basically we have to bind the context so that object method is called in passed function then there this should be known
//and refer to the user object
