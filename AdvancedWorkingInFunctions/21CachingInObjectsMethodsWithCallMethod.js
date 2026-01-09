let worker = {
    slow(min, max) {
        alert(`called with ${min} and ${max}`)
        return min + max;
    }
}

function cachingDecorator(func) {
    let cach = new Map();
    return function (...arguments) {
        let key  = hash(arguments);
        if( cach.has(key) ) {
            return cach.get(key);
        }
        
        let res = func.call(this, ...arguments); //normal call will not have cotext this(== worker), normal call with object methods will give error as there this will be undefined 
        cach.set(key, res);
        return res;
    }
}

function hash(args) {
    return args[0] + ', ' + args[1];
}

worker.slow = cachingDecorator(worker.slow);
alert(worker.slow(1, 3)); //calculated and value is cached to the map
alert(worker.slow(4, 8)); // calculated and value is cached
alert(worker.slow(1, 3)); // value from caching
