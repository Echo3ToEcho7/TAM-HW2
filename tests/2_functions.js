/*jslint node:true, plusplus:true, vars:true, nomen:true, eqeq:true*/
/*global describe:true, expect: true, it:true*/

(function () {
    "use strict";

    describe("About Functions", function () {
        describe("Declaration", function () {
            it("should allow standard declarations", function () {
                function someFunction(a, b) {
                    return a + b;
                }
    
                expect(someFunction).to.be.a(FILL_ME_IN);
                expect(someFunction(1, 1)).to.equal(FILL_ME_IN);
            });
    
            it("should allow anonymous function declarations", function () {
                var someFunction = function (a, b) {
                    return a + b;
                };
    
                expect(someFunction).to.be.a(FILL_ME_IN);
                expect(someFunction(1, 1)).to.equal(FILL_ME_IN);
            });
    
            it("should allow function variables to be different from the name", function () {
                var myFunction = function someFunction(a, b) {
                    return a + b;
                };
    
                expect(myFunction).to.be.a(FILL_ME_IN);
                expect(myFunction(1, 1)).to.equal(FILL_ME_IN);
            });
    
            it("should contain the real name of the function when converted to a string", function () {
                var myFunction = function someFunction(a, b) {
                    return a + b;
                };
    
                expect(myFunction.toString()).to.contain(FILL_ME_IN);
            });
        });
    
        describe("Scope", function () {
            it("should allow functions to see out", function () {
                var outer = 5;
    
                var someFunction = function someFunction() {
                    return outer;
                };
    
                outer = 6;
    
                expect(someFunction()).to.equal(FILL_ME_IN);
            });
    
            it("should not allow other functions to see inside", function () {
                var someFunction = function someFunction() {
                    var inner = 2;
                    return inner;
                };
    
                var exceptionFn = function exceptionFn() {
                    someFunction();
                    return inner;
                };
    
                expect(exceptionFn).to.throwException(function (e) {
                    expect(e).to.be.a(FILL_ME_IN);
                });
            });
        });
    
        it("should allow function calls to include more arguments than defined", function () {
            var oneArgFn = function onArgFn(arg1) {
                return arg1;
            };
    
            expect(oneArgFn("Hello", "World")).to.equal(FILL_ME_IN);
        });
    
        it("should have access to the 'arguments' variable to access undefined arguments", function () {
            var oneArgFn = function onArgFn(arg1) {
                return arguments[arguments.length - 1];
            };
    
            expect(oneArgFn("Hello", "World")).to.equal(FILL_ME_IN);
    
        });
    });
}());
