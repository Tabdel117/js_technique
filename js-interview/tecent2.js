// var ips = readline();

function check(origin) {
    var ips = origin.split('.');
    var ip = [];
    for (var i = 0; i< 4; i++) {
        ip.push(parseInt(ips[i],10));
    }
    if (ip[0] === 10) {
        return true;
    }
    if (ip[0] === 172 && ip[1] >=16 && ip[1] < 32) {
        return true;
    }
    if (ip[0] === 192 && ip[1] === 168) {
        return true;
    }
    if (ip[0] === 127) {
        return true;
    }
    return false;
}
console.log(check('0.0.0.0'))