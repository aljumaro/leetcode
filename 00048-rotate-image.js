/**
 * 
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 * 
 * Example 1:
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[7,4,1],[8,5,2],[9,6,3]] 
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    let n = matrix.length;
    let depth = Math.floor(n / 2);
    
    for (let i = 0; i < depth; i++) {
        let len = n - 2 * i - 1;
        let opp = n - 1 - i;
        for (let j = 0; j < len; j++) {
            let temp = matrix[i][i+j];
            matrix[i][i+j] = matrix[opp-j][i];
            matrix[opp-j][i] = matrix[opp][opp-j];
            matrix[opp][opp-j] = matrix[i+j][opp];
            matrix[i+j][opp] = temp;
        }
    }
};

let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(matrix);
console.log(matrix);