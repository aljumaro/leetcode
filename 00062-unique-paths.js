/**
 * 
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). 
 * The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
 * Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 * The test cases are generated so that the answer will be less than or equal to 2 * 10^^9.
 * 
 * Example 1:
 * Input: m = 3, n = 7
 * Output: 28
 * 
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let matrix = [[]];
    for (let i = 0; i < n; i++) {
        matrix[0].push(1);
    }
    for (let i = 1; i < m; i++) {
        matrix.push([1]);

        for (let j = 1; j < n; j++) {
            matrix[i][j] = matrix[i-1][j] + matrix[i][j-1];
        }
    }
    return matrix[m-1][n-1];
};

let m = 3, n = 3;
console.log(uniquePaths(m, n));