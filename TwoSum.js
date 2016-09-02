/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var left = 0;

    for (var i = 0; i < nums.length; i++) {
    	left = target - nums[i];
    	var leftIndex = nums.lastIndexOf(left);
    	if (leftIndex > 0 && leftIndex !== i) {
    		return [i, leftIndex];
    	}
    }
};

console.log(twoSum([2, 7, 11, 19], 9));