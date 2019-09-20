/**
 * 15. 三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    var result = {};
    var i = 0;
    while (i < nums.length && nums[i] <= 0) {
        var left = i + 1;
        var right = nums.length - 1;
        var diff = -nums[i];
        while (left < right) {
            var sum = nums[left] + nums[right];
            if (sum === diff) {
                var string = [nums[i], nums[left], nums[right]].join(' ')
                if (!result[string]) {
                    result[string] = 1;
                }
                left++;
                right--;
            } else if (sum < diff) {
                left++;
            } else {
                right--;
            }
        }
        i++;
    }
    return Object.keys(result).map(s => s.split(' '));
};

threeSum([-1, 0, 1, 2, -1, -4])