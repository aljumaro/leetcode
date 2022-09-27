/**
 * 
 * Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.
 * 
 * Example 1:
 * Input: n = 3
 * Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var generateTrees = (n) => {
    const dfs = (str, end) => {
        if (str > end) return [null]
        const res = []
        
        for (let i = str; i <= end; i++) {
            const leftNode =  dfs(str, i - 1)
            const rightNode = dfs(i + 1, end)
            
            for (const l of leftNode) {
                for (const r of rightNode) {
                    const root = new TreeNode(i)
                    root.left = l
                    root.right = r
                    res.push(root)
                }
            }
        }
        return res
    }
    
    return dfs(1, n)
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

generateTrees(3);