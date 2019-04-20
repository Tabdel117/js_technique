process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    input_array = input.split("\n");
    var nLine = 0;

    while(nLine < input_array.length){
        var line = input_array[nLine++].trim();
        if(line === ''){
            continue;
        }
        var input_arrays = line.split(' ');
        var a = +input_arrays[0];
        var b = +input_arrays[1];
        if (b >= 2 * a) {
            console.log(0);
        } else if (b === 2 * a - 1) {
            console.log(1)
        } else {
            let cnt = 0;
            let num1 = a;
            let num2 = b - a;
            while (num1 > num2) {
                cnt = cnt + 1;
                num1 = num1 - 1;
                num2 = b - num1;
            }
            console.log(cnt);
        }
    }
});