function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // ? true
/*
All delete operations are applied directly to the object. Here delete rabbit.eats tries to remove eats property from rabbit, but it doesn’t have it. So the operation won’t have any effect.
*/
/*in other word, here rabbit does not have own eats property in has prototypal property eats, when we apply delete rabbit.eats it will delete own property but it does not have so nothing 
happen, and when we try to access rabbit.eats then js first look its own eats property, but here no own eats property hence it will look to the prototypal propertry refrenced 
by [[prototype]] of rabbit, and it finds eats here and we get as true*/
