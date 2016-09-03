/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var result = 0;
    var obj = {
    	'I': 1,
    	'V': 5,
    	'X': 10,
    	'L': 50,
    	'C': 100,
    	'D': 500,
    	'M': 1000
    };
    result += obj[s[0]];
    for (var i = 1; i < s.length; i++) {
    	var preNum = obj[s[i-1]];
    	var curNum = obj[s[i]];
    	if (curNum < preNum) {
    		result += curNum;
    	} else if (curNum === preNum) {
    		if (curNum === obj[s[i-2]] && preNum === obj[s[i-3]]) {
    			console.log("Max 3 same number together!")
    			return;
    		}
    		result += curNum;
    	} else {
    		if (preNum === obj[s[i-2]] || (preNum !== 1 && preNum !== 10 && preNum !== 100)) {
    			console.log("Wrong Roman!");
    			return;
    		} 
    		result += curNum - 2 * preNum;
    	}
    }
    return result;
};

console.log(romanToInt("MCMXCVI"))