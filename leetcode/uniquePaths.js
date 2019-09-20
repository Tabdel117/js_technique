/**
 * 62. 不同路径
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var total = m + n - 2;
    var min = Math.min(m, n) - 1;
    var result = 1;
    for (var i = 0; i < min; i++) {
        result *= (total - i) / (i + 1);
    }
    return result;
};

/**
 * 63. 不同路径 II
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var row = obstacleGrid.length;
    var col = obstacleGrid[0].length;
    var result = [...new Array(row)].map(_ => [...new Array(col)].map(_ => 0));
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }
    result[0][0] = 1;
    for (var i = 1 ; i < row; i++) {
        result[i][0] = obstacleGrid[i][0] === 1 ? 0 : result[i-1][0];
    }
    for (var j = 1; j < col; j++) {
        result[0][j] = obstacleGrid[0][j] === 1 ? 0 : result[0][j-1];
    }
    for (var i = 1; i < row; i++) {
        for (var j = 1; j < col; j++) {
            result[i][j] = obstacleGrid[i][j] === 1 ? 0 : (result[i-1][j] + result[i][j-1]);
        }
    }
    return result[row-1][col-1];
};

uniquePathsWithObstacles([[1]]);