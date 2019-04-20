const preOrder = function (node) { // 递归版本
    if (node === null) return;
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
}

const preOderIterate = function(root) { // 非递归版本
    if (root === null) return;
    var stack = [];
    p = root;
    while (p !== null || !stack.isEmpty()) {
        while (p !== null) {
            console.log(p.value);
            stack.push(p);
            p = p.left;
        }
        if (!stack.isEmpty()) {
            p = stack.pop().right;
        }
    }
};

const inOrder = function (node) {
    if (node === null) return;
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
}

const inOrderIterate = function (root) {
    if (root === null) return;
    var stack = [];
    p = root;
    while (p !== null || !stack.isEmpty()) {
        while (p !== null) {
            stack.push(p);
            p = p.left;
        }
        if (!stack.isEmpty()) {
            p = stack.pop();
            console.log(p.value);
            p = p.right;
        }
    }
}

const postOrder = function (node) {
    if (node === null) return;
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
}

// 后序遍历的非递归实现最难
