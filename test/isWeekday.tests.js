describe("the Weekday function", function(){
it("should return true if a weekday", function(){
    assert.equal(isWeekday('Monday'), true);
})
it("should return false if it not weekday", function(){
    assert.equal(isWeekday('Saturday'), false);
})
});