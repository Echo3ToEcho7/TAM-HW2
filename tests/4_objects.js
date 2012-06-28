/*jslint node:true, plusplus:true, vars:true, nomen:true*/
/*global describe:true, expect: true, it:true*/

// Shamelessly pulled (yet modified) from https://github.com/mrdavidlaing/javascript-koans/blob/master/koans/AboutObjects.js
(function () {
    "use strict";

    describe("About Objects", function () {
    
        describe("Properties", function () {
            var meglomaniac;
    
            beforeEach(function () {
                meglomaniac = {
                    mastermind: "Joker",
                    henchwoman: "Harley"
                };
            });
    
            it("should confirm objects are collections of properties", function () {
                expect(meglomaniac.mastermind).to.equal(FILL_ME_IN);
            });
    
            it("should confirm that properties are case sensitive", function () {
                expect(meglomaniac.henchwoman).to.equal(FILL_ME_IN);
                expect(meglomaniac.henchWoman).to.equal(FILL_ME_IN);
            });
        });
    
    
        it("should know properties that are functions act like methods", function () {
            var meglomaniac = {
                mastermind: "Brain",
                henchman: "Pinky",
                battleCry: function battleCry(noOfBrains) {
                    return "They are " + this.henchman + " and the" + Array(noOfBrains + 1).join(" " + this.mastermind);
                }
            };
    
            var battleCry = meglomaniac.battleCry(4);
            expect("They are Pinky and the Brain Brain Brain Brain").to.equal(FILL_ME_IN);
        });
    
        it("should confirm that when a function is attached to an object, 'this' refers to the object", function () {
            var currentDate = new Date()
            var currentYear = (currentDate.getFullYear());
            var meglomaniac = {
                mastermind: "James Wood",
                henchman: "Adam West",
                birthYear: 1970,
                calculateAge: function calculateAge() {
                    return currentYear - this.birthYear;
                }
            };
    
            expect(currentYear).to.equal(FILL_ME_IN);
            expect(meglomaniac.calculateAge()).to.equal(FILL_ME_IN);
        });
    
        describe("'in' keyword", function () {
            var meglomaniac;
    
            beforeEach(function () {
                meglomaniac = {
                    mastermind: "The Monarch",
                    henchwoman: "Dr Girlfriend",
                    theBomb: true
                };
            });
    
            it("should have the bomb", function () {
    
                var hasBomb = "theBomb" in meglomaniac;
    
                expect(hasBomb).to.equal(FILL_ME_IN);
            });
    
            it("should not have the detonator however", function () {
    
                var hasDetonator = "theDetonator" in meglomaniac;
    
                expect(hasDetonator).to.equal(FILL_ME_IN);
            });
        });
    
        it("should know that properties can be added and deleted", function () {
            var meglomaniac = {
                mastermind: "Agent Smith",
                henchman: "Agent Smith"
            };
    
            expect("secretary" in meglomaniac).to.equal(FILL_ME_IN);
    
            meglomaniac.secretary = "Agent Smith";
            expect("secretary" in meglomaniac).to.equal(FILL_ME_IN);
    
            delete meglomaniac.henchman;
            expect("henchman" in meglomaniac).to.equal(FILL_ME_IN);
        });
    
    
        it("should use prototype to add to all objects", function () {
            function Circle(radius) {
                this.radius = radius;
            }
    
            var simpleCircle = new Circle(10);
            var colouredCircle = new Circle(5);
            colouredCircle.color = "red";
    
            expect(simpleCircle.color).to.equal(FILL_ME_IN);
            expect(colouredCircle.color).to.equal(FILL_ME_IN);
    
            Circle.prototype.describe = function () {
                return "This circle has a radius of: " + this.radius;
            };
    
            expect(simpleCircle.describe()).to.equal(FILL_ME_IN);
            expect(colouredCircle.describe()).to.equal(FILL_ME_IN);
        });
    });
}());
