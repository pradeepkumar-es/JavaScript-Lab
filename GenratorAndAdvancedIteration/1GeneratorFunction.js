function* generateSequence(){ //function* construct syntax tell that it is generator function //here function* f(), and function *f() both valid, but 1st one is preferred
    yield 1;
    yield 2;
    return 3;
}
let generatorObj = generateSequence(); //will return generator obj
alert(generatorObj);
let one = generatorObj.next(); //will return obj with value and done property
alert(one); //{ value: 1, done: false }
// alert(JSON.stringify(one));//{"value":1,"done":false}
let two = generatorObj.next();
alert(two);//{ value: 2, done: false }
let three = generatorObj.next();
alert(three); //{ value: 3, done: true } all execution of generatorObj is finished
//main method of genearatorObj is method which is called until nearest yield
//once return comes result of next method's obj have done = true