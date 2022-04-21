describe("the yearsAgo function", function(){
    it("should return new year", function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    })
    it("should return new year", function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    })
});