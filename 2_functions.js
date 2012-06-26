var should = require("should");

describe("Functions", function() {
    describe("Declaration", function() {
        it("should allow standard declarations", function() {
            function someFunction(a, b) {
                return a + b;
            }
            
            someFunction(1, 1).should.equal(2);
        });
        
        it("should allow anonymous function declarations", function() {
            var someFunction = function(a, b) {
                return a + b;
            };
            
            someFunction(1, 1).should.equal(2);
        });
        
        it("should allow function variables to be different from the name", function() {
            var myFunction = function someFunction(a, b) {
                return a + b;
            };
            
            myFunction(1, 1).should.equal(2);
        });
        
        it("should contain the real name of the function when converted to a string", function() {
            var myFunction = function someFunction(a, b) {
                return a + b;
            };
            
            (/someFunction/.test(myFunction + "")).should.be.true;
        });
    });
    
    describe("Scope", function() {
        
    });
});