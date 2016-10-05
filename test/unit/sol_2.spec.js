/* NPM Modules */
var jsonfile = require('jsonfile');

var chai = require('chai');
var expect = chai.expect;
chai.config.includeStack = true;

/* Program Modules */
var sol = require('../../solution.js');

describe("Problem 2 Test Cases", function () {
	it("basic test with only one element to replace", function (done) {
		sol.replaceProtectedData('data/p2_data/simple.json')
		.then( function (output) {
			var expected = jsonfile.readFileSync('test/expected_output/p2_simple.out');

			expect(JSON.stringify(output)).to.equal(JSON.stringify(expected));
			done();
		});
	});

	it("test multiple replace one after the other", function (done) {
		sol.replaceProtectedData('data/p2_data/multi-replace.json')
		.then( function (output) {
			var expected = jsonfile.readFileSync('test/expected_output/p2_multi-replace.out');

			expect(JSON.stringify(output)).to.equal(JSON.stringify(expected));
			done();
		});
	});

	it("test multiple replace nested", function (done) {
		sol.replaceProtectedData('data/p2_data/nested.json')
		.then( function (output) {
			var expected = jsonfile.readFileSync('test/expected_output/nested.out');

			expect(JSON.stringify(output)).to.equal(JSON.stringify(expected));
			done();
		});
	});

	it("test sample data given", function (done) {
		sol.replaceProtectedData('data/p2_data/sample-protected.json')
		.then( function (output) {
			var expected = jsonfile.readFileSync('test/expected_output/sample-protected.out');

			expect(JSON.stringify(output)).to.equal(JSON.stringify(expected));
			done();
		})
	});
});