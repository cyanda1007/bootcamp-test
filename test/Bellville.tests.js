describe("the Bellville function", function(){
    it("should display true if it from bellville", function(){
        assert.equal(isFromBellville('CY 123'), true);
    });
    it("should display false if it not from bellville", function(){
        assert.equal(isFromBellville('CJ 123'), false);
    })
});