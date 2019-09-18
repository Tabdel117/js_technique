/**
 * 1191. K 次串联后最大子数组之和
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function(arr, k) {
    var sum = arr.reduce((count, n) => count + n, 0);
    var maxPresumList = new Array(arr.length +1);
    var max = 0;
    maxPresumList[0] = 0;
    var presum = 0, postsum = 0;
    var maxPresum = 0, maxPostsum = 0;
    for (var i = 0; i < arr.length; i++) {
        presum += arr[i];
        postsum += arr[arr.length - i - 1];
        maxPresumList[i+1] = Math.max(maxPresumList[i] + arr[i], 0);
        if (max < maxPresumList[i+1]) {
            max = maxPresumList[i+1];
        }
        if (maxPresum < presum) {
            maxPresum = presum;
        }
        if (maxPostsum < postsum) {
            maxPostsum = postsum;
        }
    }
    var result1 = maxPostsum + maxPresum;
    if (sum > 0) {
        result1 += (k-2) * sum;
    } else {
    }
    var result = Math.max(result1, max);
    result = result % 1000000007;
    return result;
};

kConcatenationMaxSum([-5,-2,0,0,3,9,-2,-5,4],5)