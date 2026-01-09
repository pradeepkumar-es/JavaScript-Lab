function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

alert( bound.test ); // what will be the output? why?
/*since sayHi.bind(...) creates new function object hence there will no test property and hence boun.test will be undefined*/
