describe("the transportFee function", function(){
    it("should return fee amount", function(){
        assert.equal(transportFee('morning'), 'R20');
    })
    it("should return fee amount", function(){
        assert.equal(transportFee('afternoon'), 'R10');
    })
    it("should return fee amount", function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    })
});