describe("the countAllPaarl function", function(){
    it("should how many numbers from paarl", function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    })
    it("should how many numbers from paarl", function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    })
});