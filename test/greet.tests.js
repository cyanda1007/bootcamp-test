// assert.equal(greet('Bob'), 'Hello, Bob');
// assert.equal(greet('Sam'), 'Hello, Sam');
describe("the greet function", function(){
    it("should greet Bob with 'Hello, Bob'", function(){
        assert.equal(greet('Bob'), 'Hello, Bob')
    });
    it("should greet Sam with 'Hello, Sam'", function(){
        assert.equal(greet('Sam'), 'Hello, Sam');
    })
});