// Shamelessly pulled (yet modified) from https://github.com/mrdavidlaing/javascript-koans/blob/master/koans/AboutArrays.js

describe("About Arrays", function() {

	it("should create arrays", function() {
		var emptyArray = [];
		expect(emptyArray).to.be.an(Array);
		expect(emptyArray).to.have.length(0);

		var multiTypeArray = [0, 1, "two", function() {return 3;}, [4, 5]];

		expect(multiTypeArray[0]).to.equal(0);
		expect(multiTypeArray[2]).to.equal("two");
		expect(multiTypeArray[3]()).to.equal(3);
		expect(multiTypeArray[4]).to.eql([4, 5]);
		expect(multiTypeArray[4][0]).to.equal(4);
	});

	it("should understand array literals", function() {
		var array = [];
		expect(array).to.eql([]);

		array[0] = 1;
		expect(array).to.eql([1]);

		array[1] = 2;
		expect(array).to.eql([1, 2]);

		array.push(3);
		expect(array).to.eql([1, 2, 3]);
	});

	it("should understand array length", function() {
		var fourNumberArray = [1, 2, 3, 4];
		expect(fourNumberArray).to.have.length(4);

		fourNumberArray.push(5, 6);
		expect(fourNumberArray).to.have.length(6);

		var tenEmptyElementArray = new Array(10);
		expect(tenEmptyElementArray).to.have.length(10);

		tenEmptyElementArray.length = 5;
		expect(tenEmptyElementArray).to.have.length(5);
	});

	// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/slice
	it("should slice arrays", function() {
		var array = ["peanut", "butter", "and", "jelly"];

		expect(array.slice(0, 1)).to.eql(["peanut"]);
		expect(array.slice(0, 2)).to.eql(["peanut", "butter"]);
		expect(array.slice(2, 2)).to.eql([]);
		expect(array.slice(2, 20)).to.eql(["and", "jelly"]);
		expect(array.slice(3, 0)).to.eql([]);
		expect(array.slice(3, 100)).to.eql(["jelly"]);
		expect(array.slice(5, 1)).to.eql([]);
	});

	it("should know array references", function() {
		var array = ["zero", "one", "two", "three", "four", "five"];

		function passedByReference(refArray) {
			refArray[1] = "changed in function";
		}
		passedByReference(array);
		expect(array[1]).to.equal("changed in function");

		var assignedArray = array;
		assignedArray[5] = "changed in assignedArray";
		expect(array[5]).to.equal("changed in assignedArray");

		var copyOfArray = array.slice();
		copyOfArray[3] = "changed in copyOfArray";
		expect(array[3]).to.equal("three");
	});

	// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/push
	it("should push and pop", function() {
		var array = [1, 2];
		array.push(3);

		expect(array).to.eql([1, 2, 3]);

		var poppedValue = array.pop();
		expect(poppedValue).to.equal(3);
		expect(array).to.eql([1, 2]);
	});

	// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/shift
	it("should know about shifting arrays", function() {
		var array = [1, 2];

		array.unshift(3);
		expect(array).to.eql([3, 1, 2]);

		var shiftedValue = array.shift();
		expect(shiftedValue).to.equal(3);
		expect(array).to.eql([1, 2]);
	});
});
