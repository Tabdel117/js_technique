/**
 * 6. Z 字形变换
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    var result = new Array(numRows);
    for (var i = 0; i < numRows; i++) {
        result[i] = [];
    }
    var array = s.split('');
    var row = 0;
    var increase = true;
    for (var i = 0; i < array.length; i++) {
        result[row].push(array[i]);
        if (increase) {
            row++;
        } else {
            row--;
        }
        if (row === numRows - 1) {
            increase = false;
        } else if (row === 0) {
            increase = true;
        }
    }   
    return result.map(row => row.join('')).join('');
};

convert('LEETCODEISHIRING', 3)