// url解析
function encode(input) {
    var query = input.slice(input.indexOf('?') + 1);
    var queryArray = query.split('&');
    var result = {};
    for (var i = 0; i < queryArray.length; i++) {
        var equalIndex = queryArray[i].indexOf('=');
        var key = queryArray[i].slice(0, equalIndex);
        var value = queryArray[i].slice(equalIndex +1);
        result[key] = value;
    }
    return result;
}

var input = 'https://ctrip?p=1&salecity=30&from=http?a=1&2';

console.log(encode(input))
