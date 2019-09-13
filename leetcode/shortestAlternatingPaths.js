/**
 * 1129. 颜色交替的最短路径
 * @param {number} n
 * @param {number[][]} red_edges
 * @param {number[][]} blue_edges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, red_edges, blue_edges) {
    var red_result = new Array(n);
    var blue_result = new Array(n);
    red_result[0] = 0;
    blue_result[0] = 0;
    for (var i = 1; i < n; i++) {
        red_result[i] = Infinity;
        blue_result[i] = Infinity;
    }
    var red_graph = {}, blue_graph = {};
    red_edges.forEach(v => {
        var s = v[0];
        var e = v[1];
        if (red_graph[s] === undefined) {
            red_graph[s] = [e];
        } else {
            red_graph[s].push(e);
        }
    });
    blue_edges.forEach(v => {
        var s = v[0];
        var e = v[1];
        if (blue_graph[s] === undefined) {
            blue_graph[s] = [e];
        } else {
            blue_graph[s].push(e);
        }
    });
    var now_blue = [0], now_red = [0];
    var step = 0;
    while (now_blue.length > 0 || now_red.length > 0) {
        step++;
        var new_blue = [], new_red = [];
        for (var i=0; i< now_blue.length; i++) {
            var blue = now_blue[i];
            red_graph[blue] && red_graph[blue].forEach(next_red => {
                if (red_result[next_red] === Infinity) {
                    red_result[next_red] = step;
                    new_red.push(next_red);
                }
            });
        }
        for (var i = 0; i < now_red.length; i++) {
            var red = now_red[i];
            blue_graph[red] && blue_graph[red].forEach(next_blue => {
                if (blue_result[next_blue] === Infinity) {
                    blue_result[next_blue] = step;
                    new_blue.push(next_blue);
                }
            })
        }
        now_blue = new_blue;
        now_red = new_red;
    }
    var result = red_result.map((red, index) => Math.min(red, blue_result[index])).map(result => result < Infinity ? result : -1);
    return result;
};

shortestAlternatingPaths(3, [[0,1]], [[1,2]]);