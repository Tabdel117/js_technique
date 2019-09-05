function camel(arr) {
    var str = arr.split('');
    for ( var i = 0; i< str.length ; i++) {
        var s = str[i];
        if (s === '-' || s === '_' || s === '@') {
            str[i] = '-';
        }
    }
    var arr = str.join('').split('-').filter(Boolean);
    for (var i = 1; i< arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    } 
    return arr.join('');
}
console.log(camel('@background--coloR-'))