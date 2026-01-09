function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();
/*
line 2 will alert null, because original function is called with bind with hard coded null context not user so this is null 
*/
