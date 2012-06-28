/*jslint node:true, plusplus:true, vars:true, nomen:true*/
/*global describe:true, expect: true, it:true*/

// Shamelessly pulled (yet modified) from https://github.com/mrdavidlaing/javascript-koans/blob/master/koans/AboutArrays.js
(function () {
    "use strict";

    describe("About Arrays", function () {
    
        it("should create arrays", function () {
            var emptyArray = [];
            expect(emptyArray).to.be.an(FILL_ME_IN);
            expect(emptyArray).to.have.length(FILL_ME_IN);
    
            var multiTypeArray = [0, 1, "two", function () { return 3; }, [4, 5]];
    
            expect(multiTypeArray[0]).to.equal(FILL_ME_IN);
            expect(multiTypeArray[2]).to.equal(FILL_ME_IN);
            expect(multiTypeArray[3]()).to.equal(FILL_ME_IN);
            expect(multiTypeArray[4]).to.eql(FILL_ME_IN);
            expect(multiTypeArray[4][0]).to.equal(FILL_ME_IN);
        });
    
        it("should understand array literals", function () {
            var array = [];
            expect(array).to.eql(FILL_ME_IN);
    
            array[0] = 1;
            expect(array).to.eql(FILL_ME_IN);
    
            array[1] = 2;
            expect(array).to.eql(FILL_ME_IN);
    
            array.push(3);
            expect(array).to.eql(FILL_ME_IN);
        });
    
        it("should understand array length", function () {
            var fourNumberArray = [1, 2, 3, 4];
            expect(fourNumberArray).to.have.length(FILL_ME_IN);
    
            fourNumberArray.push(5, 6);
            expect(fourNumberArray).to.have.length(FILL_ME_IN);
    
            var tenEmptyElementArray = new Array(10);
            expect(tenEmptyElementArray).to.have.length(FILL_ME_IN);
    
            tenEmptyElementArray.length = 5;
            expect(tenEmptyElementArray).to.have.length(FILL_ME_IN);
        });
    
        // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/slice
        it("should slice arrays", function () {
            var array = ["peanut", "butter", "and", "jelly"];
    
            expect(array.slice(0, 1)).to.eql(FILL_ME_IN);
            expect(array.slice(0, 2)).to.eql(FILL_ME_IN);
            expect(array.slice(2, 2)).to.eql(FILL_ME_IN);
            expect(array.slice(2, 20)).to.eql(FILL_ME_IN);
            expect(array.slice(3, 0)).to.eql(FILL_ME_IN);
            expect(array.slice(3, 100)).to.eql(FILL_ME_IN);
            expect(array.slice(5, 1)).to.eql(FILL_ME_IN);
        });
    
        it("should know array references", function () {
            var array = ["zero", "one", "two", "three", "four", "five"];
    
            function passedByReference(refArray) {
                refArray[1] = "changed in function";
            }
            passedByReference(array);
            expect(array[1]).to.equal(FILL_ME_IN);
    
            var assignedArray = array;
            assignedArray[5] = "changed in assignedArray";
            expect(array[5]).to.equal(FILL_ME_IN);
    
            var copyOfArray = array.slice();
            copyOfArray[3] = "changed in copyOfArray";
            expect(array[3]).to.equal(FILL_ME_IN);
        });
    
        // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/push
        it("should push and pop", function () {
            var array = [1, 2];
            array.push(3);
    
            expect(array).to.eql(FILL_ME_IN);
    
            var poppedValue = array.pop();
            expect(poppedValue).to.equal(FILL_ME_IN);
            expect(array).to.eql(FILL_ME_IN);
        });
    
        // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/shift
        it("should know about shifting arrays", function () {
            var array = [1, 2];
    
            array.unshift(3);
            expect(array).to.eql(FILL_ME_IN);
    
            var shiftedValue = array.shift();
            expect(shiftedValue).to.equal(FILL_ME_IN);
            expect(array).to.eql(FILL_ME_IN);
        });
    });
}());
