var p1 = require('../../sol_1.js');

var expect = require('chai').expect;

describe('Problem 1 Test Cases', function (done) {
	it('should return null for an empty file', function () {
		p1('data/empty.json')
		.then( function (path) {
			expect(path).to.equal(null);
			done()
		});
		
	});

	it('should return null for an empty object', function (done) {
		p1('data/empty_obj.json')
		.then( function (path) {
			expect(path).to.equal(null);
			done();
		});
		
	});

	it('should return null for an empty array', function (done) {
		p1('data/empty_arr.json')
		.then( function (path) {
			expect(path).to.equal(null);
			done();
		});
	});

	it('finds item in a basic object with no nesting', function (done) {
		p1('data/simple_obj.json', 'serhiy')
		.then( function (path) {
			expect(path).to.equal('\\name');
			done();
		})
	});

	it('finds item in a basic array', function (done) {
		p1('data/simple_arr.json', 'serhiy')
		.then( function (path) {
			expect(path).to.equal('\\1');
			done();
		});
	});
	it('finds item in an object that has an array');
	it('finds item in an array of basic objects');
	it('finds item in an object with single nested objects');
	it('finds item in an object with double nested objects');
	it('finds item in an array of objects with nested objects and arrays');
	it('passes the given sample test case');
});