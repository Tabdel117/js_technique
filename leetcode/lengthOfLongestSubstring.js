/**
 * 3. 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0;
    }
    var array = s.split('');
    var startIndex = 0;
    var result = 1;
    var currentLength = 1;
    for (var i = 1; i < array.length; i++) {
        var character = array[i];
        var index =  array.slice(startIndex, i).indexOf(character);
        if (index === -1) {
            currentLength++;
        } else {
            result = Math.max(result, currentLength);
            startIndex = startIndex + index + 1;
            currentLength = i - startIndex + 1;
        }
    }
    result = Math.max(result, currentLength);
    return result;
};

lengthOfLongestSubstring('bbbb')