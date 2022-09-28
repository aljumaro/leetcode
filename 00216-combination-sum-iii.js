/**
 * 
 * Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
 * Only numbers 1 through 9 are used.
 * Each number is used at most once.
 * Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.
 * 
 * Example 1:
 * Input: k = 3, n = 9
 * Output: [[1,2,6],[1,3,5],[2,3,4]]
 * Explanation:
 * 1 + 2 + 6 = 9
 * 1 + 3 + 5 = 9
 * 2 + 3 + 4 = 9
 * There are no other valid combinations. * 
 * 
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = (k, n) => {
    let result = [];

    solve(k, n, 1, [], result);
    
    return result;
};

var solve = (k, remain, start, currentArr, result) => {
    if (remain == 0 && currentArr.length == k) {
        result.push([...currentArr]);
        return;
    }

    if (currentArr.length >= k || remain < 0) {
        return;
    }

    for (let i = start; i <= 9; i++) {
        currentArr.push(i);
        solve(k, remain - i, i + 1, currentArr, result);
        currentArr.pop();
    }
}

let k = 3, n = 9;
console.log(combinationSum3(k, n));