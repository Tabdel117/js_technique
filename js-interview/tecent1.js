// 本题为考试多行输入输出规范示例，无需提交，不计分。
function decode (s) {
    // console.log(s)
    var length = s.length;
    if (length === 0) {
        return '';
    }
    var current = s[0];
    if (current.charCodeAt(0) >= 65 && current.charCodeAt(0) <= 90 ) {
        return current + decode(s.slice(1));
    }
    if (current === '[') {
        s.reverse();
        var index = length - s.indexOf(']');
        s.reverse();
        return decode(s.slice(1, index - 1)) + s.slice(index).join('');
    }
    // 数字
    var i = 0;
    while (current.charCodeAt(0) >= 48 && current.charCodeAt(0) <= 57) {
        i = i + 1;
        current = s[i];
    }
    const num = parseInt(s.slice(0, i).join(''), 10);
    return concat(decode(s.slice(i+1)), num)
}

function concat(s, num) {
    if (num == 0) return '';
    var result = '';
    for (var i = 0; i < num; i++) {
        result = result + s;
    }
    return result;
}

var origin = 'HG[3|[2|B[2|CA]]EF'.split('');
console.log(decode(origin))