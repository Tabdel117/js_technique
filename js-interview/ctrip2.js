// 最长子序列匹配
function getLength(input) {
    var residual = 0;
    var substr = '';
    var len = input.length;
    for (var i = 0; i < len; i++) {
        var char = input.charAt(i);
        var index = substr.indexOf(char);
        if (index === -1) {
            substr += char;
            residual = residual < substr.length ? substr.length : residual;
        } else {
            substr = substr.substr(index + 1) + char;
        }
    }
    return residual;
    
}
var input = readline();
try {
    print(getLength(input))
} catch (e) {
    print(input + '' + e.message)  
}