var jsonfile = require('jsonfile');
var _ = require('lodash');

var replacementValues = ['serverInsert'];

var currPath;
var itemFound;
var insertFound;
var insertFileName;

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
	currPath = [''];
	itemFound = false;
	insertFound = false;
	insertFileName = '';

	return getJSONData(fileName)
		.then( function resolveGetJSONData (data) {
			if (_.isEmpty( data )) {
				return Promise.reject();
			}

			return findItem(data, itemName);
		}, function rejectGetJSONData (err) {
			return Promise.reject(err);
		})
		.then( function resolveFindItem (path) {
			return Promise.resolve(path);
		}, function rejectFindItem (err) {
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
 	return new Promise( function (resolve, reject) {
 		traverseJSON( data, itemName );
 		
 		if (currPath.length === 1) {
 			reject(null);
 		} else {
 			resolve(currPath.join('\\'));
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
 	for (var i in data) {
 		if (itemFound) {
 			break;
 		}

 		currPath.push(i);
 		
 		if (!!data[i] && typeof data[i] === 'object') {
 			traverseJSON( data[i], itemName );

 			if (insertFound) {
				replaceSensoredWithReal(data, i, data[i]);
				insertFound = false;
 			}
 		} else if (replacementValues.indexOf(i) >= 0) {
 			insertFound = true;
 		} else if (data[i] === itemName) {
 			itemFound = true;
 		}

 		if (!itemFound) {
 			currPath.pop();
 		}
 	}
}

/*
 * Replaces any occurance of items found in the replacementValues array with the actual data.
 *
 * @param {string} fileName - The name of the file to scan and replace any sensitive data found.
 */
function replaceProtectedData (fileName) {

}

/*
 * Gets the additional file with sensored data and replaces the requested location
 * with the real data.
 *
 * @param {Array} data - The array in which to replace the data.
 * @param {int} idx - The array index at which to replace the data.
 * @param {string} sensoredDataFileName - The name of the file that contains the sensored data.
 */
function replaceSensoredWithReal (data, idx, sensoredDataFileName) {

}



module.exports = {
	'getItemPath': getItemPath,
	'replaceProtectedData': replaceProtectedData
};