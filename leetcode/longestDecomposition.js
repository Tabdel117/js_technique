/**
 * 1147. 段式回文
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
    var textLength = text.length;
    var result = 0;
    var i = 0;
    var middle = Math.ceil(textLength / 2);
    while(i < middle) {
        var l = 1;
        // aaa的情况
        if (i === middle) {
            return result + 1;
        }
        while (true) {
            // 中间为一个非回文情况
            if (i + l === textLength - i) {
                return result + 1;
            }
            var left = text.substring(i, i + l);
            var right = text.substring(textLength-i-l , textLength-i);
            if (left === right) {
                i += l;
                result += 2;
                break;
            } else {
                l++;
            }
        }
    }
    return result;
};

longestDecomposition("bqrcnnqrcb")