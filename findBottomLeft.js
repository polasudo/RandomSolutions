// Given the root of a binary tree, return the leftmost value in the last row of the tree.
// Input: root = [2,1,3]
// Output: 1
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    const queue = [root]; //root = 2
    let leftmost = null;

    while (queue.length > 0) {
        leftmost = queue.shift();

        if (leftmost.right) {
            queue.push(leftmost.right);
        }
        if (leftmost.left) {
            queue.push(leftmost.left);
        }
    }

    return leftmost.val;
};