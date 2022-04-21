describe("the countRegNumbers", function(){
    it("should count how many registration number are in the string,", function(){
        assert.equal(countRegNumber ('CA 182736,CY 523519,CJ 812328'), 3);
    }) 
    it("should count how many registration number are in the string", function(){
        assert.equal(countRegNumber('CA 182736'), 1);
    })
});