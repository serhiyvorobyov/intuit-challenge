/* NPM Modules */
var expect = require('chai').expect;

/* Program Modules */
var sol = require('../../solution.js');

describe("Problem 3 Test Cases", function () {
	it("passes the provided sample test", function () {
		var output = sol.getElementValue("itemList.items.subItems", "label", "subItem1Item2")
		
		expect(output).to.equal("SubItem 2 label");
	});
});