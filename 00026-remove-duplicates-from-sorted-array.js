/**
 * 
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
 * The relative order of the elements should be kept the same.
 * 
 * Example 1:
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * 
 * Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length == 1) {
        return nums;
    }

    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] == nums[i-1]) {
            nums.splice(i, 1);
        }
    }

    return nums.length;  
};

let nums = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(nums);