/*
describe("pow", function() {
    it("it raises n-th power", function() {
        assert.equal(pow(2, 3), 8);
        assert.equal(pow(3, 4), 81);
    });
});
*/
//in above case if first assert fail, then we will never able to see what happen to other ssert as it 
//block terminate immedietly

//2nd variant : making tests separate is useful to get more information what goings on. so it is better
/*
describe("pow", function(){
    it("2 raised to power 3 is 8", function() {
        assert.equal(pow(2, 3), 8);
    });

    it("3 rasied to power 4 is 81", function() {
        assert.equal(pow(3, 4), 81);
    });
});
*/

//more improved version
/*
describe("pow", function() {
    function makeTest(x) {
        let expected = x*x*x;
        it(`${x} raised to the power 3 is ${expected}`, function() {
            assert.equal(pow(x, 3), expected);
        });
    }

    for(let i = 1; i <= 5; i++){
        makeTest(i);
    }
});
*/

/*
describe("pow", function() {
    it("if n is negative, result is NaN", fucntion() {
        assert.isNaN(pow(2, -1));
    })

     it("if n is non-integer, result is NaN", fucntion() {
        assert.isNaN(pow(2, 2.5));
    })
})
*/
//nested describe: to label as subgroup test
describe("pow", function() {
    describe("x raised to power 3", function() {
            function makeTest(x) {
        let expected = x*x*x;
        it(`${x} raised to the power 3 is ${expected}`, function() {
            assert.equal(pow(x, 3), expected);
        });
    }

    for(let i = 1; i <= 5; i++){
        makeTest(i);
    }
    })
});