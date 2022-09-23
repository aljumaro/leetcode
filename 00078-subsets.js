/**
 * 
 * Problem description: Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 * 
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = (nums) => {
    let result = [];

    solve(nums, 0, [], result);

    return result;
};

var solve = (nums, index, currentPath, result) => {

    if (nums.length <= index) {
        result.push([...currentPath]);
        return;
    }
    
    currentPath.push(nums[index]);
    solve(nums, index + 1, currentPath, result);
    currentPath.pop();

    solve(nums, index + 1, currentPath, result);
}

let nums = [1,2,3];
console.log(subsets(nums));