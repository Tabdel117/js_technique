/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 105. 从前序和中序获取二叉树
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    var root = buildSubtree(preorder, inorder);
    return root;
};

var buildSubtree = function(preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }
    if (preorder.length === 1) {
        return {
            val: preorder[0],
            left: null,
            right: null,
        };
    }
    var root = {};
    root.val = preorder[0];
    var index = inorder.indexOf(preorder[0]);
    var inorderLeft = inorder.slice(0, index);
    var inorderRight = inorder.slice(index+1);
    var preorderLeft = preorder.slice(1, 1 + inorderLeft.length);
    var preorderRight = preorder.slice(1 + inorderLeft.length);
    root.left = buildSubtree(preorderLeft, inorderLeft);
    root.right = buildSubtree(preorderRight, inorderRight);
    return root;
}
buildTree([3,9,20,15,7], [9,3,15,20,7])