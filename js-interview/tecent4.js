// var zone = parseInt(readline());
// var people_s = readline().split(' ');
// var people = [];
// for (var i = 0; i< zone; i++) {
//     people.push(parseInt(people_s[i], 10));
// }
// var time = readline().split(' ');
// var u = parseInt(time[0]);
// var v = parseInt(time[1]);
function q(zone, people, u, v) {
    var result = 0;
    var max = -1;
    for (var i = 0; i < zone; i++ ) {
        var current = sumArray(people, i, v-u);
        if (current > max) {
            max = current;
            result = i;
        }
    }
    return result + u + 1;
}

function r(arr, u, v) {
    var result = 0;
    var index = u;
    for (var i = 0; i < v-u; i++) {
        result = result + arr[i];
    }

    for (var i = 1; i < arr.length; i++) {
        if (v-u+i-1 > arr.length) {
            break;
        }
        var current = result - arr[i - 1] + arr[v-u+i-1];
        
        if (current > result) {
            result = current;
            index = u + i + 1;
        }
    }
    return index;
}

console.log(r([2,5,6],1, 3))