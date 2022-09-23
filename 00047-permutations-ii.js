/**
 * 
 * Problem description: Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
 * 
 * Example 1:
 * Input: nums = [1,1,2]
 * Output:
 * [[1,1,2],
 *  [1,2,1],
 *  [2,1,1]]
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = (nums) => {
    let result = [];
    nums.sort((a, b) => {  return a - b;  });
    solve(nums, 0, result);
    return result;
};

var solve = (nums, index, result) => {
    if (index == nums.length) {
        result.push([...nums]);
        return;
    }

    for (let n = index; n < nums.length; n++) {
        if (n != index && nums[n] == nums[n-1]) {
            continue;
        }
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

let nums = [1,1,2]
console.log(permuteUnique(nums));