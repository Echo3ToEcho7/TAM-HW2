describe("About Functions", function() {
    describe("Declaration", function() {
        it("should allow standard declarations", function() {
            function someFunction(a, b) {
                return a + b;
            }

            expect(someFunction).to.be.a(Function);
            expect(someFunction(1, 1)).to.equal(2);
        });

        it("should allow anonymous function declarations", function() {
            var someFunction = function(a, b) {
                return a + b;
            };

            expect(someFunction).to.be.a(Function);
            expect(someFunction(1, 1)).to.equal(2);
        });

        it("should allow function variables to be different from the name", function() {
            var myFunction = function someFunction(a, b) {
                return a + b;
            };

            expect(myFunction).to.be.a(Function);
            expect(myFunction(1, 1)).to.equal(2);
        });

        it("should contain the real name of the function when converted to a string", function() {
            var myFunction = function someFunction(a, b) {
                return a + b;
            };

            expect(myFunction + "").to.contain("someFunction");
        });
    });

    describe("Scope", function() {
        it("should allow functions to see out", function() {
            var outer = 5;

            var someFunction = function someFunction() {
                return outer;
            };

            outer = 6;

            expect(someFunction()).to.equal(6);
        });

        it("should not allow other functions to see inside", function() {
            var someFunction = function someFunction() {
                var inner = 2
                return inner;
            };

            var exceptionFn = function exceptionFn() {
                someFunction();
                return inner;
            };

            expect(exceptionFn).to.throwException(function(e) {
                expect(e).to.be.a(ReferenceError);
            });
        });
    });

    it("should allow function calls to include more arguments than defined", function() {
        var oneArgFn = function onArgFn(arg1) {
            return arg1;
        };

        expect(oneArgFn("Hello", "World")).to.equal("Hello");
    });

    it("should have access to the 'arguments' variable to access undefined arguments", function() {
        var oneArgFn = function onArgFn(arg1) {
            return arguments[arguments.length - 1];
        };

        expect(oneArgFn("Hello", "World")).to.equal("World");

    });
});
