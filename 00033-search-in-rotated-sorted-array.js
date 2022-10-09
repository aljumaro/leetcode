/**
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * 
 * Example 1:
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return dfs(nums, 0, nums.length-1, target);
};

var dfs = (nums, low, high, target) => {
    let middle = Math.floor((low + high) / 2);
    if (nums[middle] == target) {
        return middle;
    }

    if (low == high) {
        return -1;
    }

    if (nums[low] <= nums[middle]) {
        if (nums[low] <= target && target <= nums[middle] ) {
            return dfs(nums, low, middle-1, target);
        } else {
            return dfs(nums, middle+1, high, target);
        }
    } else {
        if (nums[middle] <= target && target <= nums[high]) {
            return dfs(nums, middle+1, high, target);
        } else {
            return dfs(nums, low, middle-1, target);
        }
    }
}

let nums = [5,1,3], target = 3;
console.log(search(nums, target));