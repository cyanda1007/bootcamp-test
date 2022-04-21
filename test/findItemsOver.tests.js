describe("findItemsOver function", function(){
    it("should return item", function(){
        assert.deepEqual(results,findItemsOver(itemList,20))
    })
    it("should return item",function(){
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
    })
});