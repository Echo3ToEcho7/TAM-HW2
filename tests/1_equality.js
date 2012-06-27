describe("Equality", function() {
    describe("double equals", function() { 
        it("should auto type cast an integer and a string to be true", function() {
            expect(5 == "5").to.be(true);
        });

        it("should auto type cast a float and a string to be true", function() {
            expect(5.0 == "5.0").to.be(true);
        });
    });
    
    describe("triple equals", function() { 
        it("should auto type cast an integer and a string to be true", function() {
            expect(5 === "5").to.be(false);
        });

        it("should auto type cast a float and a string to be true", function() {
            expect(5.0 === "5.0").to.be(false);
        });
    });
});