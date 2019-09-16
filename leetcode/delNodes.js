/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 1110. 删点成林
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    var rootArray = [];
    var iterateNodes =  function(node, isRoot) {
        if (node === null) {
            return;
        }
        if (!to_delete.includes(node.val)) { // 不删除
            if (isRoot) { // 是根节点
                rootArray.push(node);
            }
            iterateNodes(node.left, false);
            iterateNodes(node.right, false);
        } else { // 删除
            iterateNodes(node.left, true);
            iterateNodes(node.right, true);
            node.left = null;
            node.right = null;
            node.val = null;
        }
    }
    iterateNodes(root, true);
    var result = rootArray.map(r => printTree(r));
    return result;
};

var printTree = function(root) {
    var list = [root];
    var result = [];
    while (list.length > 0) {
        var node = list.shift();
        if (node !== null) {
            result.push(node.val);
            list.push(node.left);
            list.push(node.right);
        }
    }
    var i = result.length -1;
    while (i >= 0) { // 去除尾部所有null
        if (result[i] === null) {
            result.pop();
            i--;
        } else {
            break;
        }
    }
    return result;
}

var tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}
delNodes(tree, [3,5])