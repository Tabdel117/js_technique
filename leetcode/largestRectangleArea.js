/**
 * 84. 柱状图中最大的矩形
 * @param {number[]} heights
 * @return {number}
 */

var largestRectangleArea = function(heights) {
    if (!heights.length) {
        return 0;
    }
    if (heights.length === 1) {
        return heights[0];
    }
    var stack = [-1], result = 0;
    for (var i = 0; i < heights.length; i++) {
        if (heights[i] > heights[stack[stack.length-1]]) {
            stack.push(i);
        } else {
            while (stack.length > 0 && heights[stack[stack.length-1]] > heights[i]) {
                var index = stack.pop();
                result = Math.max(result, heights[index] * (i - stack[stack.length-1] - 1));
            }
            stack.push(i);
        }
    }
    while (stack.length > 1) {
        var index = stack.pop();
        result = Math.max(result, (heights.length - 1 - stack[stack.length -1]) * heights[index]);
    }
    return result;
};
largestRectangleArea([2,1,5,6,2,3])