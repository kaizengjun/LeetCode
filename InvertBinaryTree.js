/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
//递归
var invertTree = function(root) {
    if (!root) return null;
    var temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    return root;
}; 

//非递归版
var invertTree = function(root) {
    if (!root) return null
    var queue = [];
    queue.push(root);
    while (queue.length > 0) {
        var node = queue.shift();
        var temp = node.left;
        node.left = node.right;
        node.right = temp;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return root;
}; 
