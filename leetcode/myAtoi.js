/**
 * 8. 字符串转换整数 (atoi)
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if (!str) {
        return 0;
    }
    var MAX = Math.pow(2, 31);
    var array = str.split('');
    var i = 0;
    var isPositive = true;
    while (array[i] === ' ') {
        i++;
    } 
    if (array[i] === '+') {
        i++;
    } else if (array[i] === '-') {
        isPositive = false;
        i++;
    }
    var result = 0;
    while (i < array.length) {
        if (array[i] < '0' || array[i] > '9') {
            break;
        }
        result = result * 10 + parseInt(array[i], 10);
        if (isPositive && result > MAX - 1) {
            return MAX - 1;
        } else if (!isPositive && result > MAX ) {
            return - MAX;
        }
        i++;
    }
    return isPositive ? result : -result;
};

myAtoi('   -42');