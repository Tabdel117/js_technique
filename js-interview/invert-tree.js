var invertTree = function(root) {
    var queue = [];
    queue.push(root);
    var curNode = null;
    while((curNode = queue.shift()) != null){
        //switch curNode left and right
        var tmp = curNode.left;
        curNode.left = curNode.right;
        curNode.right = tmp;
        if (curNode.left !== null){
            queue.push(curNode.left);
        }
        if (curNode.right !== null){
            queue.push(curNode.right);
        }
    }
    return root;
};
