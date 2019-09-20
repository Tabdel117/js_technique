/**
 * 32. 最长有效括号
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var array = s.split('');
    var stack = [];
    var i = 0;
    while (i < s.length) {
        if (array[i] === '(') {
            stack.push('(');
        } else if (array[i] === ')') {
            var result = 0;
            while (typeof stack[stack.length -1] === 'number') {
                result += stack.pop();
            }
            if (stack[stack.length -1] === '(') {
                stack.pop();
                stack.push(result + 2);
            } else {
                stack.push(result);
                stack.push(')');
            }
        }
        i++;
    }
    var max = 0, current = 0;
    for (var i = 0; i < stack.length; i++) {
        if ((stack[i] !== '(' && stack[i] !== ')')) {
            current += stack[i];
            max = Math.max(max, current);
        } else {
            current = 0;
        }
    }
    return max;
};

longestValidParentheses(")()())")