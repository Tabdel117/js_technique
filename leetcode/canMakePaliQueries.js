/**
 * 1177. 构建回文串检测
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function(s, queries) {
    return queries.map(query => canMakePaliQuery(s, ...query));
};

var canMakePaliQuery = function(s, left, right, k) {
    var array = s.split('').slice(left, right +1);
    var dic = {};
    for (var i = 0; i < array.length; i++) {
        var char = array[i];
        dic[char] = dic[char] ? 0 : 1;
    }
    var odd = 0;
    for (var key of Object.keys(dic)) {
        odd += dic[key];
    }
    if (array.length % 2 === 1) {
        odd = odd - 1;
    }
    if (odd > 2 * k) {
        return false;
    }
    return true;
}

canMakePaliQueries('abcda', [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]);