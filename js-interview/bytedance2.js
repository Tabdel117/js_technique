// 最长连续tuple。
var c = parseInt(readline());
var egi = parseInt(readline());
var array = [];
var len = [];
while(line=readline()){
    var lines = line.split(" ");
    var row = [];
    len.push(parseInt(lines[0]));
    if (lines.length === 1) {
        array.push([]);
    } else {
        for (var i = 1; i < lines.length; i ++) {
            row.push(parseInt(lines[i], 10));
        }
        array.push(row);
    }
}
// var c = 1;
// var egi = 8;
// var array =  [[1,1,2,2],[1,1,1,4],[1,1,2,2],[2,2,1,4],[],[],[1,1],[1,1]];
// var len = [2, 2, 2, 2, 0, 0 ,1 ,1];
var result = {};
var lastMatch = {};
for (var t = 0; t < array.length; t++) {
    for (var i = 0; i < len[t]; i ++ ) {
        for (var j = 0; j < len[t +1]; j++) {
            if (isSame(getEgi(t, i), getEgi(t + 1, j))) {
                var key = getEgi(t,i).join(',');
                if (result[key] === undefined) {
                    result[key] = [2];
                } else {
                    if (lastMatch[key] === t - 1) {
                        const tmp = result[key].length -1;
                        result[key][tmp] = result[key][tmp] + 1;
                    }
                    else {
                        result[key].push(2);
                    }
                }
                lastMatch[key] = t;
            }
        }
    }
}
var l = 1;
var keys = Object.keys(result);
for (var i = 0; i <  keys.length; i ++) {
    const tmp = result[keys[i]];
    for (var j = 0; j < tmp.length; j++) {
        if (tmp[j] > l) {
            l = tmp[j];
        }
    }
}
console.log(l)

function getEgi(t, index) {
    if (t > array.length - 1) {
        return [];
    }
    if (index * 2 > array[t].length) {
        return [];
    }
    var result =  array[t].slice(index * 2, (index + 1) * 2);
    return result;
}

function isSame(array1, array2) {
    if (array1.length === 2&& array2.length === 2 && array1[0] === array2[0] && array1[1] === array2[1] ) {
        return true;
    }
    return false;
}