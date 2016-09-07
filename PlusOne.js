/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var flag = 0;
    for (var i = digits.length - 1; i >= 0; i--) {
        var num = digits[i];
        if (i === digits.length - 1) {
            num += flag + 1;
        } else {
            num += flag;
        }
        
        if (num >= 10) {
            num = num % 10;
            flag = 1;
        } else {
            flag = 0;
        }
        digits[i] = num;
    }
    if (++i === 0 && flag === 1) {
            digits.unshift(1);
    }
    return digits;
};