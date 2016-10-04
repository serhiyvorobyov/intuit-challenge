var jsonfile = require('jsonfile');
var _ = require('lodash');

var currPath;
var itemFound;

/*
 * Returns the full path for an element if it exists in the
 * JSON file provided.
 *
 * @function getItemPath
 *
 * @param {string} fileName - The name of the JSON file in which to look for itemName.
 * @param {string} itemName - The name of the item to search for.
 *
 * @returns {string} - The path to itemName or null if it does not exist.
 */
function getItemPath (fileName, itemName) {
	currPath = ['\\'];
	itemFound = false;

	return getJSONData(fileName)
		.then( function resolveGetJSONData (data) {
			console.log('resolvedGetJSONData', data);
			if (_.isEmpty( data )) {
				console.log('Rejecting due to empty data', data);
				return Promise.reject();
			}

			return findItem(data, itemName);
		}, function rejectGetJSONData (err) {
			console.log('rejectedGetJSONData');
			return Promise.reject(err);
		})
		.then( function resolveFindItem (path) {
			console.log('resolvedFindItem');
			return Promise.resolve(path);
		}, function rejectFindItem (err) {
			console.log('rejectedFindItem');
			return Promise.resolve(null);
		});
} 

/*
 * Creates a JSON object from the given filepath.
 *
 * @param {string} fileName - Path to JSON file.
 *
 * @returns {Promise} - Resolves after file has been fully read.
 */
function getJSONData (fileName) {
	return new Promise( function (resolve, reject) {
		jsonfile.readFile(fileName, function jsonfileCb (err, obj) {
			console.log(err, obj);
			if (err) {
				reject(err);
			} else {
				resolve(obj);
			}
		});
	});

}

/*
 * Iterates through the data object and tries to find the specified itemName
 *
 * @param {Object} data - The JSON data through which to iterate.
 * @param {string} itemName - The name of the item we are looking for in data.
 *
 * @returns {string} - The path from root to where the item is, or null if not found.
 */
function findItem (data, itemName) {
 	console.log('findItem');
 	return new Promise( function (resolve, reject) {
 		traverseJSON( data, itemName );
 		console.log(currPath, '< currPath');
 		
 		if (currPath.length === 1) {
 			reject(null);
 		} else {
 			resolve(currPath.join(''));
 		}
 	});
}

/*
 * Traverses the JSON object and looks for itemName. Uses recursion for nested
 * objects.
 *
 * @param {Object} data - The JSON data through which to iterate.
 * @param {string} itemName - The name of the item we are looking for in data. 
 */
function traverseJSON (data, itemName) {
 	console.log("traverseJSON", data, itemName);
 	for (var i in data) {
 		console.log(i, data[i], typeof data[i], data[i] === itemName);
 		currPath.push(i);
 		console.log('do I get here?');

 		if (itemFound) {
 			console.log('Breaking out');
 			break;
 		} else if (!!data[i] && typeof data[i] === 'object') {
 			console.log('recursive call');
 			traverseJSON( data[i], itemName );
 		} else if (data[i] === itemName) {
 			console.log('item found!');
 			itemFound = true;
 		}

 		if (!itemFound) {
 			console.log('popping from path');
 			currPath.pop();
 		}

 	}
}

module.exports = getItemPath;