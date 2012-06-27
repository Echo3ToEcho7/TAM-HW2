describe("Functions", function() {
    describe("Declaration", function() {
        it("should allow standard declarations", function() {
            function someFunction(a, b) {
                return a + b;
            }
            
            expect(someFunction(1, 1)).to.equal(2);
        });
        
        it("should allow anonymous function declarations", function() {
            var someFunction = function(a, b) {
                return a + b;
            };
            
            expect(someFunction(1, 1)).to.equal(2);
        });
        
        it("should allow function variables to be different from the name", function() {
            var myFunction = function someFunction(a, b) {
                return a + b;
            };
            
            expect(myFunction(1, 1)).to.equal(2);
        });
        
        it("should contain the real name of the function when converted to a string", function() {
            var myFunction = function someFunction(a, b) {
                return a + b;
            };
            
            expect(/someFunction/.test(myFunction + "")).to.equal(true);
        });
    });
    
    describe("Scope", function() {
        
    });
});