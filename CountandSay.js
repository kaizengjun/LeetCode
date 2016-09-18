/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n < 1) return '';
    var ret = '1';
    for (var i = 2; i <= n; i++) {
        var count = 1;
        var prev = ret[0];
        var temp = '';
        for (var j = 1; j < ret.length; j++) {
            if (ret[j] === prev) {
                count++;
            } else {
                temp += count.toString();
                temp += prev;
                count = 1;
                prev = ret[j];
            }
        }
        temp += count.toString();
        temp += prev;
        ret = temp;
    }
    
    return ret;
  
};