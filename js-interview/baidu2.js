var line1 = readline().split(' ');
var x1 = parseInt(line1[1], 10);
var y1 = parseInt(line1[2], 10);
var x2 = parseInt(line1[3], 10);
var y2 = parseInt(line1[4], 10);
var num = parseInt(line1[0], 10);
var d1 = [];
var d2 = [];
for (var i = 0; i < num; ++i) {
    var coor = readline().split(' ');
    xi = parseInt(coor[0], 10);
    yi = parseInt(coor[1], 10);
    d1.push((xi - x1) * (xi - x1) + (yi - y1) * (yi - y1));
    d2.push((xi - x2) * (xi - x2) + (yi - y2) * (yi - y2));
}
d1.sort();
d2.sort();
for (var i = 0; i < d1.length; i++) {
    
}