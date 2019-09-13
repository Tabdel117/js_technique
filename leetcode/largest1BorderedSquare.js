/**
 * 1139. 最大的以 1 为边界的正方形
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function(grid) {
    var row = grid.length;
    var col = grid[0].length;
    if (grid.reduce((count, row) => count + row.reduce((result, number) => result + number, 0), 0) === 0) {
        return 0;
    }
    var maxLength = 1;
    for (var r = 0 ; r < row; r++) {
        for (var c = 0; c < col; c++) {
            var l = maxLength + 1;
            while (true) {
                var length = 4 * l - 4;
                var r1 = r + l - 1;
                var c1 = c + l - 1;
                if (r1 >= row || c1 >= col) {
                    break;
                }
                var result = sum(grid, r, c, r1, c1);
                if (result === length) {
                   maxLength = l;
                }
                l++;
            }
        }
    }
    return maxLength * maxLength;
};

var sum = function(grid, r0, c0, r1, c1) {
    var result = 0;
    result += grid[r0].slice(c0, c1 + 1).reduce((count, number) => count + number, 0);
    result += grid[r1].slice(c0, c1 + 1).reduce((count, number) => count + number, 0);
    for (var r = r0 + 1; r <= r1 -1; r++) {
        result += grid[r][c0] + grid[r][c1];
    }
    return result;
}

largest1BorderedSquare([[1,1,0],[1,1,1],[1,1,1],[1,1,1]])