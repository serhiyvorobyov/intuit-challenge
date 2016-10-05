/* NPM Modules */
var expect = require('chai').expect;

/* Program Modules */
var p1 = require('../../solution.js');

describe("Problem 2 Test Cases", function () {
	it("basic test with only one element to replace", function (done) {
		p1.replaceProtectedData('data/p2_data/simple.json')
		.then( function (output) {
			var expected = {
				"items": [
					{
						"id": "subItem1Itemphone",
						"label": "phone"
					}
				]
			}

			expect(JSON.stringify(output)).to.equal(JSON.stringify(expected));
			done();
		});
	});
});