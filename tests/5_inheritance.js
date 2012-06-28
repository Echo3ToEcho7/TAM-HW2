/*jslint node:true, plusplus:true, vars:true, nomen:true*/
/*global describe:true, expect: true, it:true, beforeEach:true*/

// Shamelessly pulled (yet modified) from https://github.com/mrdavidlaing/javascript-koans/blob/master/koans/AboutInheritance.js
(function () {
    "use strict";

    var Muppet = function Muppet(age, hobby) {
        this.age = age;
        this.hobby = hobby;
    };
    
    Muppet.prototype.answerNanny = function answerNanny() {
        return "Everything's cool!";
    };
    
    var SwedishChef = function SwedishChef(age, hobby, mood) {
        Muppet.call(this, age, hobby);
        this.mood = mood;
    };
    
    SwedishChef.prototype = new Muppet();
    
    SwedishChef.prototype.cook = function cook() {
        return "Mmmm soup!";
    };
    
    
    describe("About inheritance", function () {
        var muppet;
        var swedishChef;
    
        beforeEach(function () {
            muppet = new Muppet(2, "coding");
            swedishChef = new SwedishChef(2, "cooking", "chillin");
        });
    
        it("should be able to call a method on the derived object", function () {
            expect(swedishChef.cook()).to.equal("Mmmm soup!");
        });
    
        it("should be able to call a method on the base object", function () {
            expect(swedishChef.answerNanny()).to.equal("Everything's cool!");
        });
    
        it("should set constructor parameters on the base object", function () {
            expect(swedishChef.age).to.equal(2);
            expect(swedishChef.hobby).to.equal("cooking");
        });
    
        it("should set constructor parameters on the derived object", function () {
            expect(swedishChef.mood).to.equal("chillin");
        });
    });
}());
