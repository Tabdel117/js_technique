// n * n 方阵，内容为0，1, 2
// 每次2周围的1变为2，问需要几次循环。
// 1不能完全变为2输出-1
var array = [];
while(line=readline()){
    var lines = line.split(" ");
    var row = [];
    for (var i = 0; i < lines.length; i ++) {
        row.push(parseInt(lines[i], 10));
    }
    array.push(row);
}
// var array =[[1, 2, 1], [1, 1, 0], [0 ,1, 1]];
var row = array.length;
var col = array[0].length;
var iteration = 0;
while (true) {
    if (!ifPMExist(array)) {
        // print(iteration);
        console.log(iteration);
        break;
    }
    var hasChanged = false;
    var oldArray = copy(array);
    for (var i = 0 ; i < row; i++) {
        for (var j = 0 ; j < col; j++) {
            if (oldArray[i][j] === 2) {
                hasChanged = convert(oldArray, i, j - 1, array) || hasChanged;
                hasChanged = convert(oldArray, i, j + 1, array) || hasChanged;    
                hasChanged = convert(oldArray, i - 1, j, array) || hasChanged;
                hasChanged = convert(oldArray, i + 1, j, array) || hasChanged;
            } 
        }
    }
    iteration = iteration + 1;
    
    if (ifPMExist(array) && !hasChanged) {
        // print(-1);
        console.log(-1)
        break;
    }
}

function convert(array, row, col, newArray) {
    if (row < 0 || col < 0 || row > array.length - 1 || col > array[0].length - 1) {
        return false;
    }
    if (array[row][col] === 1) {
        newArray[row][col] = 2;
        return true;
    }
    return false;
}

function ifPMExist(array) {
    for (var i = 0 ; i < array.length; i ++) {
        for (var j = 0 ; j <array[0].length; j++) {
            if (array[i][j] === 1) {
                return true;
            }
        }
    }
    return false;
}

function copy(array) {
    var result = [];
    for (var i = 0 ; i < array.length; i ++) {
        result[i] = [];
        for (var j = 0 ; j <array[0].length; j++) {
            result[i].push(array[i][j])
        }
    }
    return result;
}
