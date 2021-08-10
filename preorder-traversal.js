/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//                 1
//               /   \
//             2      5
//           /  \      / \
//          3    6   4     7

//             1,2,5,4,7         
 
// values = [1,2,3,6,5,4,7] 
// stack = []

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let stack = []
    let values = []
    stack.push(root)
    if (root === null) {
        return values
    }
    while (stack.length > 0) {
        let current = stack.pop()
        values.push(current.val)
        if (current.right !== null) {
            stack.push(current.right)
        }
        if (current.left !== null) {
            stack.push(current.left)
        }
    }
    return values

};