/**
 * 1155. 掷骰子的N种方法
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(D, F, target) {
    var dic = {};
    dic[1] = {};
    for (var f = 1; f <= F; ++f) {
        dic[1][f] = 1;
    }
    for (var d = 2; d <= D; ++d) {
        dic[d] = {};
        for (var t = d; t <= F * d; ++t) {
            for (var k = 1; k <= Math.min(t - 1, F); ++k) {
                var a = dic[d-1][t-k] || 0;
                a =  a%1000000007;
                if (dic[d][t] !== undefined) {
                    dic[d][t] += a;
                } else {
                    dic[d][t] = a;
                }
            }
        }
    }
    return dic[D][target] || 0;
};

numRollsToTarget(30, 30, 500)