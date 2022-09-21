/**
 * 
 * Problem description: Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
 * Each number in candidates may only be used once in the combination.
 * Note: The solution set must not contain duplicate combinations.
 * 
 * Example 1:
 * Input: candidates = [10,1,2,7,6,1,5], target = 8
 * Output: 
 * [
 * [1,1,6],
 * [1,2,5],
 * [1,7],
 * [2,6]
 * ]
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = (candidates, target) => {
    const currentSum = 0;
    const currentCombination = [];
    const result = [];
    candidates.sort((a, b) => {  return a - b;  });
    solve(candidates, target, result, 0, currentSum, currentCombination);
    return result;
};

var solve = (candidates, target, result, index, currentSum, currentCombination) => {
    if (currentSum > target) {
        return;
    }

    if (currentSum == target) {
        result.push([...currentCombination]);
        return;
    }

    for (let n = index; n < candidates.length; n++) {
        if (n > index && candidates[n] === candidates[n-1]) {
            continue;
        } else {
            currentCombination.push(candidates[n]);
            solve(candidates, target, result, n + 1, currentSum + candidates[n], currentCombination);
            currentCombination.pop();        
        }
    }
}

let c = [10,1,2,7,6,1,5];
let t = 8;
console.log(combinationSum2(c, t));