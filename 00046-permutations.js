/**
 * 
 * Problem description: Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order
 * 
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = (nums) => {
    let result = [];
    
    solve(nums, 0, result);

    return result;
};

var solve = (nums, index, result) => {
    if (index == nums.length) {
        result.push([...nums]);
        return;
    }

    for (let n = index; n < nums.length; n++) {
        swap(nums, n, index);
        solve(nums, index + 1, result);
        swap(nums, n, index);
    }
}

var swap = (nums, i, j) => {
    if (i != j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
}

let nums = [1,2,3,4]
console.log(permute(nums));