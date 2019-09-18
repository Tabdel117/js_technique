/**
 * 5. 最长回文子串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var array = s.split('');
    var s = 0, e = 0;
    var maxLength = 1;
    var i = 0;
    while (i < array.length) {
        var endIndex = i + 1 + array.slice(i+1).lastIndexOf(array[i]);
        var subArray = array.slice(i+1, endIndex);
        while (endIndex > i) {
            var found = true;
            var middle = Math.ceil((endIndex + i)/2);
            for (var j = i + 1; j < middle; j++) {
                if (array[j] !== array[endIndex + i - j]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                length = endIndex - i + 1;
                if (maxLength < length) {
                    maxLength = length;
                    s = i;
                    e = endIndex;
                }
                break;
            } else {
                endIndex = i + 1 + subArray.lastIndexOf(array[i]);
                subArray = array.slice(i+1, endIndex);
            }
        }
        if (array.length - i < maxLength) {
            break;
        }
        i++;
    }
    var string = array.slice(s, e + 1).join('');
    return string;
};

longestPalindrome('babadada')