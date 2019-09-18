/**
 * 1190. 反转每队括号间的字串
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    var array = s.split('');
    var stack = [];
    var string = '';
    for (var i = 0; i < array.length; i++) {
        if (array[i] === '(') {
            if (string) {
                stack.push(string);
                string = '';
            }
            stack.push('(');
        } else if (array[i] === ')') {
            if (string) {
                stack.push(string);
                string = '';
            }
            var tmp = stack.pop();
            var substring = '';
            while (tmp !== '(') {
                substring = tmp + substring;
                tmp = stack.pop();
            }
            stack.push(substring.split('').reverse().join(''));
        } else {
            string += array[i];
            if (i === array.length -1) {
                stack.push(string);
            }
        }
    }
    var result = stack.join('');
    return result;
};

reverseParentheses('(ed(et(oc))el)')