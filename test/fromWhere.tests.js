describe("fromWhere function", function(){
    it("should return which place does it belong", function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    })
    it("should return which place does it belong", function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    })
    it("should return which place does it belong", function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    })
    it("should return which place does it belong", function(){
        assert.equal(fromWhere('CC'), 'Some other place!');
    })
});