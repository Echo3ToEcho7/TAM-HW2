/*jslint node:true, plusplus:true, vars:true, nomen:true, eqeq:true*/
/*global describe:true, expect: true, it:true*/

(function () {
    "use strict";
    
    describe("About Equality", function () {
        describe("double equals", function () {
            it("should auto type cast an integer and a string to be true", function () {
                expect(5 == "5").to.be(FILL_ME_IN);
            });
    
            it("should auto type cast a float and a string to be true", function () {
                expect(5.0 == "5.0").to.be(FILL_ME_IN);
            });
        });
    
        describe("triple equals", function () {
            it("should auto type cast an integer and a string to be true", function () {
                expect(5 === "5").to.be(FILL_ME_IN);
            });
    
            it("should auto type cast a float and a string to be true", function () {
                expect(5.0 === "5.0").to.be(FILL_ME_IN);
            });
        });
    });
}());
