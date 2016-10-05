/* NPM Modules */
var expect = require('chai').expect;

/* Program Modules */
var sol = require('../../solution.js');

describe("Problem 3 Test Cases", function () {
	it("passes the provided sample test", function (done) {
		sol.getValue("itemList.items.subItems", "label", "subItem1Item2")
		.then( function (value) {
			expect(value).to.equal("SubItem 2 label");
		});
	});
});