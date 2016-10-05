# intuit-challenge
Coding challenge solutions for Intuit.

## Installation
1. Visit https://nodejs.org/en/download/ to download NodeJS if you do not have it on your system.
2. Clone the repo
``` javascript
  git clone https://github.com/serhiyvorobyov/intuit-challenge.git
 ```
3. From the root directory run 
``` javascript
  npm install
```
## Running Test Cases
``` javascript
  npm test
```
## Assumptions
Below are assumptions I made for each problem.

### Problem 1 Assumptions
* NULL is returned if 
 * the item does not exist in the JSON file
 * the JSON file is empty
 * only contains an empty object
 * only contains an empty array

### Problem 2 Assumtions
* The object containing serverInsert does not contain any other elements.
* The object containing serverInsert is inside an array.

### Problem 3 Assumptions
* path, element, and id are all valid
* only the provided json object will be used 

## Usage
``` javascript
  var sol = require('solution.js');
  
  sol.getItemPath(fileName, itemName); // To get path from root to location of itemName
  sol.replaceProtectedData(fileName); // To replace protected data
  sol.getElementValue(path, element, id); // To get the value of an element at a specific path location
