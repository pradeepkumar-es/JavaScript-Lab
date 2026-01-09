function slow(x) {
    //CPU heavy calculations
    alert(`called with ${x}`);
    return x + 100;
}

function cachingDecorator(func) {
    let map = new Map();
    return function (x) {
        if( map.has(x) ) {
            return map.get(x);
        }
        
        let res = func(x);
        map.set(x, res);
        return res;
    }
}

let slow1 = cachingDecorator(slow);
alert(slow1(1)); //calculated and value is cached to the map
alert(slow1(4)); // calculated and value is cached
alert(slow1(1)); // value from caching
