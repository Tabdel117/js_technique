/**
 * 	16. 最接近的三数之和    
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a - b);
    var diff_positive = Infinity;
    var diff_negative = Infinity;
    var i = 0;
    var result;
    while (i < nums.length) {
        var left = i + 1;
        var right = nums.length - 1;
        while (left < right) {
            var sum = nums[left] + nums[right] + nums[i];
            if (sum === target) {
                return target;
            } else if (sum < target) {
                diff_positive = Math.min(diff_positive, target - sum);
                left++;
            } else {
                diff_negative = Math.min(diff_negative, sum - target);
                right--;
            }
        }
        i++;
    }
    if (diff_negative > diff_positive) {
        result = target - diff_positive;
    } else {
        result = target + diff_negative;
    }
    return result;
};

threeSumClosest([1, 1, 1, 1], 0)