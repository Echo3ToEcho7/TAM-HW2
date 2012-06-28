describe("About Scope", function() {
	var SomePrototype = function SomePrototype() {
		this.a = 1;
	};

	SomePrototype.prototype.changeA = function changeA(val) {
		this.a = val;
	};

	var o1, o2;

	beforeEach(function() {
		o1 = new SomePrototype;
		o2 = new SomePrototype;
	});

	it("should know it's default scope", function() {
		o1.changeA(2);

		expect(o1.a).to.equal(2);
		expect(o2.a).to.equal(1);
	});

	it("should obay function.call to manually set the scope", function() {
		o1.changeA.call(o2, 2);

		expect(o1.a).to.equal(1);
		expect(o2.a).to.equal(2);
	});

});
