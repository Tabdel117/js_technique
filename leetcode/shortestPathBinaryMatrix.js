/**
 * 1091. 二进制矩阵中的最短路径
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    var row = grid.length;
    var col = grid[0].length;
    if (grid[0][0] === 1 || grid[row-1][col-1] == 1) {
        return -1;
    }
    var visited = {'0,0': true};
    var next = [];
    var check = function(x, y) {
        if (x >= 0 && y >= 0 && x < row && y < col && grid[x][y] === 0) {
            var string = [x,y].join(',');
            if (!visited[string]) {
                visited[string] = true;
                next.push([x,y]);
            }
        }
    }
    var step = 1;
    var toVisit = [[0,0]];
    while (toVisit.length > 0) {
        for (var i = 0; i < toVisit.length; i++) {
            var r = toVisit[i][0];
            var c = toVisit[i][1];
            if (r === row - 1 && c === col - 1) {
                return step;
            }
            check(r-1, c-1);
            check(r-1, c);
            check(r-1, c+1);
            check(r, c-1);
            check(r, c+1);
            check(r+1, c-1);
            check(r+1, c);
            check(r+1, c+1);
        }
        toVisit = next;
        next = [];
        step++;
    }
    return -1;
};

shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]])
