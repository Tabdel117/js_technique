/**
 * 1186. 删除一次得到子数组最大和
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
    var noDeleteEndWith = new Array(arr.length);
    var deleteEndWith = new Array(arr.length);
    noDeleteEndWith[0] = arr[0];
    deleteEndWith[0] = -Infinity;
    for (var i = 1; i < arr.length; i++) {
        noDeleteEndWith[i] = Math.max(noDeleteEndWith[i-1] + arr[i], arr[i]);
        deleteEndWith[i] = Math.max(deleteEndWith[i-1] + arr[i], noDeleteEndWith[i-1]);
    }
    var max1 = noDeleteEndWith.reduce((max, number) => number > max ? number : max, -Infinity);
    var max2 = deleteEndWith.reduce((max, number) => number > max ? number : max, -Infinity);
    return Math.max(max1, max2);
};

maximumSum([1,-2,-2,3])