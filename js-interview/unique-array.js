function uniqueArrayEs6(arr) {
    return Array.from(new Set(arr));
}

function uniqueArrayEs5(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; i++) {
            if (arr[j] === arr[i]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}