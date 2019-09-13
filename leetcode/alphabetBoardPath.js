/**
 * 1138. 字母板上的路径
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
    var dic = {
        a: [0, 0], b: [0, 1], c: [0, 2], d: [0, 3], e: [0, 4],
        f: [1, 0], g: [1, 1], h: [1, 2], i: [1, 3], j: [1, 4],
        k: [2, 0], l: [2, 1], m: [2, 2], n: [2, 3], o: [2, 4],
        p: [3, 0], q: [3, 1], r: [3, 2], s: [3, 3], t: [3, 4],
        u: [4, 0], v: [4, 1], w: [4, 2], x: [4, 3], y: [4, 4],
        z: [5, 0]
    }
    var current = [0, 0];
    return target.split('').reduce((result , character) => {
        var coordinate = dic[character];
        var y = coordinate[0] - current[0];
        var x = coordinate[1] - current[1];
        if (x === 0 && y === 0) {
            return result + '!';
        }
        if (y >= 0) { // 往下走
            result += x >= 0 ? 'R'.repeat(x) : 'L'.repeat(-x);
            result += 'D'.repeat(y);
        } else { // 往上走
            result += 'U'.repeat(-y);
            result += x >= 0 ? 'R'.repeat(x) : 'L'.repeat(-x);
        }
        current = dic[character];
        return result + '!';
    }, '');
};

alphabetBoardPath('leet')