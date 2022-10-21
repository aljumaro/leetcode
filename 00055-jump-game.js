/**
 * 
 * You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 * 
 * Example 1:
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let reach = 0;

    for (let i = 0; i < nums.length; i++) {
        if (reach < i) return false;

        reach = Math.max(reach, i + nums[i]);
    }

    return true;
};

let nums = [3,2,1,0,4];
console.log(canJump(nums));