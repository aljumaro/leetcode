/**
 * 
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    if (nums.length == 0) {
        return [-1, -1];
    }

    let left = binarySearch(nums, 0, nums.length - 1, target, true);
    if (left !== -1) {
        let right = binarySearch(nums, 0, nums.length - 1, target, false);
        return [left, right];
    }

    return [left, left];
};

var binarySearch = (nums, low, high, target, leftBound) => {
    let middle = Math.floor((low + high) / 2);
    let isLeftBoundDifferent = leftBound && ((nums[middle-1] < nums[middle]) || (middle === low));
    let isRightBoundDifferenc = !leftBound && ((nums[middle+1] > nums[middle]) || (middle === high));
    if (nums[middle] == target && (isLeftBoundDifferent || isRightBoundDifferenc)) {
        return middle;
    }

    if (low == high) {
        return -1;
    }

    if (target < nums[middle]) {
        return binarySearch(nums, low, Math.max(low, middle-1), target, leftBound);
    } if (target > nums[middle]) {
        return binarySearch(nums, Math.min(middle+1, high), high, target, leftBound);
    } else {
        if (leftBound) {
            return binarySearch(nums, low, Math.max(low, middle-1), target, leftBound);
        } else {
            return binarySearch(nums, Math.min(middle+1, high), high, target, leftBound);
        }
    }
}

let nums = [1], target = 1;
console.log(searchRange(nums, target));