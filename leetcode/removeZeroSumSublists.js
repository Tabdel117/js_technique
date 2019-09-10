/**
 * 1171. 从链表中删去总和值为零的连续节点，利用前缀和做
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function(head) {
    var array = list2array(head);
    var sum = array[0];
    var sumArray = [sum];
    for (var i = 1; i < array.length; ++i) {
        sum+= array[i];
        sumArray.push(sum);
    }
    // 如有为0，则去除前面所有子串
    var zeroIndex = findLastIndexOf(sumArray, 0);
    if (zeroIndex >= 0) {
        array.splice(0, zeroIndex + 1);
        sumArray.splice(0, zeroIndex + 1);
    }
    for (var i = 0; i < array.length; ++i) {
        var index = findLastIndexOf(sumArray, sumArray[i]);
        if (index !== i) {
            array.splice(i+1, index- i);
            sumArray.splice(i+1, index- i);
        }
    }
    return array2list(array)
};

var list2array = function(head) {
    const array = [head.val];
    var ptr = head;
    while (ptr.next) {
        ptr = ptr.next;
        array.push(ptr.val);   
    }
    return array;
}

var array2list = function(array) {
     if (array.length === 0) {
        return null;
    }
    var head = { val: array[0] };
    var ptr = head;
    for (var i = 1; i < array.length; ++i) {
        ptr.next = { val: array[i]};
        ptr = ptr.next;
    }
    ptr.next = null;
    return head;
}

// Array.prototype.lastIndexOf()
var findLastIndexOf = function(array, number) {
    var reverseArray = array.slice().reverse();
    var index = reverseArray.indexOf(number);
    if (index >= 0) {
        return array.length - index - 1;
    }
    return -1;
}

