describe("About Expects.js", function() {
	it("should use 'ok' to assert that the value is truthy or not", function() {
		expect(1).to.be.ok();
		expect(true).to.be.ok();
		expect({}).to.be.ok();
		expect(0).to.not.be.ok();
	});
	
	it("should use 'be/equal' to assert ===", function() {
		expect(1).to.be(1)
		expect(NaN).not.to.equal(NaN);
		expect(1).not.to.be(true)
		expect('1').to.not.be(1);
	});

	it("should use 'eql' to assert == as well as objects", function() {
		expect({ a: 'b' }).to.eql({ a: 'b' });
		expect(1).to.eql('1');
	});

	it("should use 'a/an' to assert typeof", function() {
		expect(5).to.be.a('number');
		expect([]).to.be.an('array');
		expect([]).to.be.an('object');

		expect([]).to.be.an(Array);
		expect({}).to.be.an(Object);
	});

	it("should use 'length' to assert array lengths", function() {
		expect([]).to.have.length(0);
		expect([1, 2, 3]).to.have.length(3);
	});

	it("should use 'throwError/throwException' to assert if a function throws exception", function() {
		var fn1 = function() {
			throw new Error;
		};

		var fn2 = function() {};

		expect(fn1).to.throwException(function(e) {
			expect(e).to.be.an(Error); // We can also check the type of Exception
		});

		expect(fn2).not.to.throwException();
	});
});
