/**
 * 1131. 绝对值表达式的最大值
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
    var dis = [];
    for (var i = 0; i < arr1.length; i++) {
        for (var j = i+1; j < arr1.length; j++) {
            dis.push(Math.abs(arr1[i] - arr1[j]) + Math.abs(arr2[i] - arr2[j]) + j-i);
        }
    }
    var result = Math.max(...dis);
    return result;
};
maxAbsValExpr([1,2,3,4], [-1,4,5,6])