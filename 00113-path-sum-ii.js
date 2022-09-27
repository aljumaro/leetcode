/**
 * 
 * Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.
 * A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.
 * 
 * Example 1:
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * Output: [[5,4,11,2],[5,8,4,5]]
 * Explanation: There are two paths whose sum equals targetSum:
 * 5 + 4 + 11 + 2 = 22
 * 5 + 8 + 4 + 5 = 22 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = (root, targetSum) => {

    let result = [];

    var dfs = (root, output, sum) => { 
        if (!root) {
            return;
        }
        output.push(root.val);
        sum += root.val;
        if (!root.left && !root.right && targetSum === sum) {
            result.push([...output]);
            return;
        }
        dfs(root.left, [...output], sum);
        dfs(root.right, [...output], sum);
        const poppedElement = output.pop();
        sum -= poppedElement;
    }

    dfs(root, [], 0);
    
    return result;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let five2 = new TreeNode(5);
let one = new TreeNode(1);
let four2 = new TreeNode(4, five2, one);
let thirteen = new TreeNode(13);
let eight = new TreeNode(8, thirteen, four2);
let seven = new TreeNode(7);
let two = new TreeNode(2);
let eleven = new TreeNode(11, seven, two);
let four = new TreeNode(4, eleven);
let five = new TreeNode(5, four, eight);

pathSum(five, 22);