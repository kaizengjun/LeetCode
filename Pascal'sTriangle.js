/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	var result = [];
    for (var i = 1; i <= numRows; i++) {
    	var rowArr = new Array(i);
    	for (var j = 0; j < rowArr.length; j++) {
    		if (j === 0) {
    			rowArr[j] = 1;
    			continue;
    		}
    		if (j === rowArr.length - 1) {
    			rowArr[j] = 1;
    			continue;
    		}
    		rowArr[j] = result[i-2][j-1] + result[i-2][j];
    	}
    	result.push(rowArr);
    }
    return result;
};

console.log(generate(10));