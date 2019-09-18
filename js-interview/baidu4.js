var T = parseInt(readline(), 10);
var list = new Array(T);
for (var t = 0; t < T; t++) {
    list[t] = [];
    var n = parseInt(readline(), 10);
    for (var i = 0; i < n; i++) {
        var array = readline().split(' ');
        list[t].push(parseInt(array[0], 10), parseInt(array[1], 10));
    }
}
for (var t = 0; t < T; t++) {
    list[t].sort((a, b) => a[1] - b[1]);
    var result = true;
    var i = 0;
    var presum = 0;
    while (i < list[t].length) {
        presum += list[t][i][0];
        if (presum > list[t][i][1]) {
            result = false;
            break;
        }
        i++;
    }
    if (result) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
