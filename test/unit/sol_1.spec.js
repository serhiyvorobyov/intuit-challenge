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

	it('finds item in an object that has an array', function (done) {
		p1('data/obj_w_arr.json', 'serhiy')
		.then( function (path) {
			expect(path).to.equal('\\items\\2'); 
			done();
			
		});
	});

	it('finds item in an array of basic objects', function (done) {
		p1('data/arr_w_objs.json', 'pablo')
		.then( function (path) {
			expect(path).to.equal('\\3\\name');
			done();
		})
	});

	it('finds item in an object with double nested objects', function (done) {
		p1('data/nested_obj.json', 'peaches')
		.then( function (path) {
			expect(path).to.equal('\\food\\fruits\\1');
			done();
		})
	});

	it('passes the given sample test case', function (done) {
		p1('data/sample.json', 'item2')
		.then( function (path) {
			expect(path).to.equal('\\itemList\\items\\1\\id');
			done();
		})
	});
});