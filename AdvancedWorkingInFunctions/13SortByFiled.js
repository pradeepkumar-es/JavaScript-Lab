let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
//usual way
// by name (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);
// by age (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);

function byField(param) {
 return function (x, y) {
     return x[param] > y[param] ? 1 : -1; //since param is key but not fixed so here we are using obj[key] instead of obj.key
 }   
}
users.sort(byField('name'));
alert(users); /*[
  { name: 'Ann', age: 19, surname: 'Hathaway' },
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' }
] */
users.sort(byField('age'));
alert(users);
/*
[
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
  { name: 'John', age: 20, surname: 'Johnson' }
]
*/
