/**
 * 1144. 递减元素使数组呈锯齿状
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function(nums) {
    var minusEven = 0;
    var minusOdd = 0;
    for (var i = 0; i < nums.length; i++) {
        const left = i - 1 >= 0 ? nums[i-1] : Infinity;
        const right = i + 1 < nums.length ? nums[i+1] : Infinity;
        const result =  Math.max(nums[i] - left + 1, nums[i] - right + 1, 0);
        if (i%2 == 0) {
            minusEven += result;
        } else {
            minusOdd += result;
        }
    }
    return Math.min(minusOdd, minusEven);
};

movesToMakeZigzag([9,6,1,6,2])