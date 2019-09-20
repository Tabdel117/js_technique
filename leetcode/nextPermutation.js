/**
 * 31. 下一个排列
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    function change(a,b) {
        var tmp = nums[a];
        nums[a] = nums[b];
        nums[b] = tmp;
    }
    var i = nums.length - 1;
    var isDecrease = true;
    while (i > 0) {
        if (nums[i-1] < nums[i]) {
            isDecrease = false;
            break;
        }
        i--;
    }
    if (isDecrease) {
        return nums.reverse();
    }
    var j = nums.length -1;
    while (nums[j] <= nums[i-1]) {
        j--;
    }
    change(j, i-1);
    var left = i, right = nums.length -1;
    while (left < right) {
        change(left, right);
        left++;
        right--;
    }
    return nums;
};

nextPermutation([1,2,2,5,4,3])

