/**
 * 11. 盛最多水的容器
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var left = 0;
    var right = height.length - 1;
    var max = 0;
    while (left < right) {
        if (height[left] > height[right]) {
            max = Math.max(max, height[right] * (right - left));
            right--;
        } else {
            max = Math.max(max, height[left] * (right - left));
            left++;
        }
    }
    return max;
};

maxArea([1,8,6,2,5,4,8,3,7])