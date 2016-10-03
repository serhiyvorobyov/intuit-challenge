var p1 = require('../../sol_1.js');

var expect = require('chai').expect;

describe("Problem 1 Test Cases", function (done) {
	it("should return null for an empty file", function () {
		p1('data/empty.json')
		.then( function (path) {
			expect(path).to.equal(null);
			done()
		});
		
	});

	it("should return null for an empty object", function (done) {
		p1('data/empty_obj.json')
		.then( function (path) {
			expect(path).to.equal(null);
			done();
		});
		
	});

	it("should return null for an empty array", function (done) {
		p1('data/empty_arr.json')
		.then( function (path) {
			expect(path).to.equal(null);
			done();
		});
	});
});