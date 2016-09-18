/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a.length < b.length) {
        var temp = a;
        a = b;
        b= temp;
    }
    var res = "";
    var carry = 0;
    for (var i = 1; i <= a.length; i++) {
        var aNum = parseInt(a[a.length - i]);
        var bNum = parseInt(b[b.length - i]) || 0;
        var add = aNum + bNum + carry;
        if (add === 3) {
            res = "1" + res;
            carry = 1;
        } else if (add == 2) {
            res = "0" + res;
            carry = 1;
        } else {
            res = add + res;
            carry = 0;
        }
    }
    if (carry === 1) {
        res = carry + res;
    }
    return res;
};