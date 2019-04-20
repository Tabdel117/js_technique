// os内进程执行顺序
function getDependacy(input) {
    // var ob = JSON.parse(input);
    var ob = input;
    var keyArray = Object.keys(ob);
    var result = [];
    for (var i = 0; i < keyArray.length; i++) {
        var keyToPush = findTargert(ob);
        result.push(keyToPush);
        delete(ob[keyToPush]);
        for (var j = 0; j< Object.keys(ob).length; j++) {
            var key = Object.keys(ob)[j];
            var value = ob[key];
            var newValue = [];
            for (var k = 0; k < value.length; k++) {
                if (value[k] !== keyToPush) {
                    newValue.push(value[k]);
                }
            }
            ob[key] = newValue;
        }
    }
    return result;
}

function findTargert(obj) {
    var keyArray = Object.keys(obj);
    for (var i = 0; i < keyArray.length; i++) {
        var key = keyArray[i];
        var value = obj[key];
        if (value.length === 0) {
            return key;
        }        
    }
    return null;
}
var input = {'A' : ['B', 'C'], 'B': ['D', 'C', 'F'], 'C': ['E'], 'D': [], 'E': ['D'], 'F': ['E', 'C']};
console.log(JSON.stringify(JSON.parse(input)))
