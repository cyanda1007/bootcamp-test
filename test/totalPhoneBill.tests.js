describe(" the totalPhoneBill function", function(){
    it("should return total cost for the phoneBill", function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    })
    it("should return total cost for the phoneBill", function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    })
    it("should return total cost for the phoneBill", function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    })
});