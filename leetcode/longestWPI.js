/**
 * 1124. 表现良好的最长时间段
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
    var isTired = hours.map(hour => hour > 8 ? 1 : -1);
    var sum = 0;
    var presum = [0];
    for (var i = 0; i < isTired.length; i++) {
        sum += isTired[i];
        presum.push(sum);
    }
    var stack = [0];
    for (var i = 1; i < presum.length; i++) {
        var top = presum[stack.slice(-1)[0]];
        if (top > presum[i]) {
            stack.push(i);
        }
    }
    var result = 0;
    i = presum.length - 1;
    while (i > result) {
        while (presum[i] > presum[stack.slice(-1)[0]]) {
            result = Math.max(result, i - stack.slice(-1)[0]);
            stack.pop();
        }
        i--;
    }
    return result;
};

longestWPI([6,9,9])

