/**
 * 
 * Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 * 
 * Example 1:
 * Input: nums = [1,2,2]
 * Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = (nums) => {
    nums.sort((a, b) => a - b)
    
    const res = []
    
    const dfs = (len, start = 0, stack = []) => {
        if (len === stack.length) {
            res.push([...stack])
            return
        }
        
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue
            stack.push(nums[i])
            dfs (len, i + 1, stack)
            stack.pop(nums[i])
        }
    }
    
    for (let i = 0; i <= nums.length; i++) dfs(i)
    
    return res
}

let nums = [4,4,4,1,4];
subsetsWithDup(nums)