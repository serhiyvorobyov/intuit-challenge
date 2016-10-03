var jsonfile = require('jsonfile');

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
	return getJSONData(fileName)
		.then( function resolveGetJSONData (data) {
			if (!data) {
				return Promise.reject();
			}

			return findItem(data, itemName);
		}, function rejectGetJSONData (err) {
			return Promise.reject();
		})
		.then( function resolveFindItem (path) {
			return path;
		}, function rejectFindItem (err) {
			return null;
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
 		resolve(null);
 	});
 }