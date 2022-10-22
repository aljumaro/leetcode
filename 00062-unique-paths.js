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
    let matrix = new Array(m);
    for (let k = 0; k < matrix.length; k++) {
        matrix[k] = new Array(n).fill(-1);
    }
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][0] = 1;
    }
    for (let i = 0; i < matrix[0].length; i++) {
        matrix[0][i] = 1;
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            matrix[i][j] = matrix[i-1][j] + matrix[i][j-1];
        }
    }
    return matrix[m-1][n-1];
};

let m = 4, n = 4;
console.log(uniquePaths(m, n));