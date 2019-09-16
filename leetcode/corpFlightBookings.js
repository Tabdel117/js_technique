/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    var result = new Array(n);
    for (var i = 0; i < n; i++) {
        result[i] = 0;
    }
    for (var index = 0; index < bookings.length; index++) {
        var i = bookings[index][0];
        var j = bookings[index][1];
        var k = bookings[index][2];
        for (var tmp = i; tmp <= j; tmp++) {
            result[tmp-1] +=k;
        }
    }
    return result;
};

corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]],5)