/**
 * 
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * 
 * Example 1:
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 * 
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = [];
    solve(matrix, 0, 0, result);    
    return result;
};

var solve = (matrix, i, j, result) => {
    if (result.length == matrix[0].length * matrix.length
        || i >= matrix.length 
        || j >= matrix[0].length
        || i < 0
        || j < 0
        || matrix[i][j] == "*"
        ) return;
    
    result.push(matrix[i][j]);
    matrix[i][j] = "*";

    // In order to go right on the inner levels of the spiral we have to check wether we can go up first.
    // We can go up if we are not on the outter most level or if there is a number on top.
    if (i-1 < 0 || matrix[i-1][j] == "*") {
        solve(matrix, i, j+1, result);
    }
    solve(matrix, i+1, j, result);
    solve(matrix, i, j-1, result);
    solve(matrix, i-1, j, result);
}

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
console.log(spiralOrder(matrix));

/*
[[1,2,3,4],
 [5,6,7,8],
 [9,10,11,12],
 [13,14,15,16]]
*/