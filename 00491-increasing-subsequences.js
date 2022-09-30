/**
 * 
 * Given an integer array nums, return all the different possible increasing subsequences of the given array with at least two elements. You may return the answer in any order.
 * 
 * The given array may contain duplicates, and two equal integers should also be considered a special case of increasing sequence.
 * 
 * Example 1:
 * Input: nums = [4,6,7,7]
 * Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = (nums) => {
    let result = [];

    dfs(nums, 0, [], result);

    return result;
};

var dfs = (nums, start, current, result, viewed = {}) => {
    if (current.length > nums.length) {    
        return;
    }

    if (current.length > 1 && !(current.join(",") in viewed)) {
        viewed[current.join(",")] = '';
        result.push([...current]);
    }

    for (let i = start; i < nums.length; i++) {
        if (current.length == 0 || current[current.length - 1] <= nums[i]) {
            current.push(nums[i]);
            dfs(nums, i + 1, current, result, viewed);
            current.pop();
        }
    }
}

let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
findSubsequences(nums);