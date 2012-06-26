var should = require("should");

describe("Equality", function() {
    describe("double equals", function() { 
        it("should auto type cast an integer and a string to be true", function() {
            (5 == "5").should.be.true;
        });

        it("should auto type cast a float and a string to be true", function() {
            (5.0 == "5.0").should.be.true;
        });
    });
    
    describe("triple equals", function() { 
        it("should auto type cast an integer and a string to be true", function() {
            (5 === "5").should.be.false;
        });

        it("should auto type cast a float and a string to be true", function() {
            (5.0 === "5.0").should.be.false;
        });
    });
});