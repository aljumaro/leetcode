/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 
 * Problem description: Given the root of a binary tree, return all root-to-leaf paths in any order.
 * A leaf is a node with no children.
 * 
 * Example 1:
 * Input: root = [1,2,3,null,5]
 * Output: ["1->2->5","1->3"]
 * 
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = (root) => {
    const paths = [];
    const currPath = [];
    solve(root, currPath, paths);
    return paths;
};

var solve = (root, currPath, paths) => {
    currPath.push(root.val);

    if (root.left == null && root.right == null) {
        paths.push(currPath.join("->"));
    } else {
        if (root.left != null){
            solve(root.left, currPath, paths);
        }
        if (root.right != null){
            solve(root.right, currPath, paths);
        }
    }
    
    currPath.pop();
}

let five = new TreeNode(5);
let three = new TreeNode(3);
let two = new TreeNode(2, null, five);
let one = new TreeNode(1, two, three);
console.log(binaryTreePaths(one));

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}