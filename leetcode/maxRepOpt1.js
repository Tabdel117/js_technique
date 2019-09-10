/**
 * 1156. 单字符重复子串的最大长度
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function(text) {
    var array = text.split('');
    var max = 0;
    var currentLeft = 1;
    var currentRight = 0;
    var currentChar = array[0];
    var misMatch = false;
    var i = 1;
    var dic = {};
    for (var j = 0; j < text.length; ++j) {
        var char = array[j];
        if (dic[char] === undefined) {
            dic[char] = 1;
        } else {
            ++dic[char];
        }
    }
    while (i < text.length) {
        if (array[i] === currentChar) {
            if (!misMatch) {
                ++currentLeft;
            } else {
                ++currentRight;
            }
            ++i;
        } else {
            if (!misMatch) {
                misMatch = true;
                ++i;
            } else {
                var current = currentRight + currentLeft;
                if (dic[currentChar] > current) {
                    ++current;
                }
                if (current  > max) {
                    max = current;
                }
                i-= currentRight;
                misMatch = false;
                currentLeft = 1;
                currentRight = 0;
                currentChar = array[i-1];
            }
        }
    }
    var current = currentRight + currentLeft;
    if (dic[currentChar] > current) {
        ++current;
    }
    if (current  > max) {
        max = current;
    }
    return max;
};

maxRepOpt1("aaabbaaa")