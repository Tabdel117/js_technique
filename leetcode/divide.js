/**
 * 29. 两数相除
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var isNegative = false;
    var positiveDivisor;
    var positiveDividend;
    if ((divisor < 0 && dividend > 0) || (divisor > 0 && dividend < 0)){
        isNegative = true;
    }
    positiveDivisor = Math.max(divisor, -divisor);
    positiveDividend = Math.max(dividend, -dividend);
    var residual = positiveDividend;
    var ratio = 1;
    var current = positiveDivisor;
    var result = 0;
    var max = Math.pow(2, 31);
    while (residual >= positiveDivisor) {
        if (residual < current) {
            current = positiveDivisor;
            ratio = 1;
        } else {
            residual -= current;
            current = current + current;
            result += ratio;
            ratio = ratio + ratio;
        }
        if (isNegative && result > max) {
            result = max;
            break;
        } else if (!isNegative && result > max - 1) {
            result = max - 1;
            break
        }
    }
    return isNegative ? -result : result;
};

divide(10, 3)