/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
/*
分析：第一行和最后一行下标间隔都是interval = n*2-2；
	  中间行的间隔是周期性的,第i行的间隔是: 
	  interval–2*i,  2*i,  interval–2*i, 2*i, interval–2*i, 2*i, …
*/
var convert = function(s, numRows) {
    var strLen = s.length;
    if (strLen == 0) {
    	return "";
    }
    if (numRows == 1) {
    	return s;
    }
    var firstLastGap = numRows * 2 - 2;
    var result = [];
    //first row
    for (var i = 0; i <= strLen; i += firstLastGap) {
    	result.push(s[i]);
    }

    //middel row
    for (var i = 1; i < numRows - 1; i++) {
    	var temp = 1; //decide which gap
    	for (var j = i; j <= strLen;) {
    		result.push(s[j]);    		   
    		if ( temp % 2 === 1) {
    			j += firstLastGap - 2 * i;
    		} else {
    			j += 2 * i;
    		}
    		temp++;
    	}
    }

    //last row
    for (var i = numRows - 1; i <= strLen; i += firstLastGap) {
    	result.push(s[i]);
    }

    return result.join('');
};

console.log(convert("", 1));