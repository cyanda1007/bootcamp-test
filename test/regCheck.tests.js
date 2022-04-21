// describe("the Bellville function", function(){
//     it("should display true if it from bellville", function(){
//         assert.equal(isFromBellville('CY 123'), true);
//     });
//     it("should display false if it not from bellville", function(){
//         assert.equal(isFromBellville('CJ 123'), false);
//     })
// });
describe("the regCheck function", function(){
    it("should return regNumber end with the provinve", function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    })
    it("should return regNumber end with the province", function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    })
});