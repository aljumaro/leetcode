/**
 * 
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 * 
 * Example 1:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 * 
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = (board, word) => {
    let result = false;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (word[0] == board[i][j]) {
                result = solve(board, word, 0, i, j);
                if (result) {
                    return true;
                }            
            }
        }
    }
    return result;
};

var solve = (board, word, wordIndex, row, col) => {
    if (row < 0 || row > board.length -1 || col < 0 || col > board[0].length || word[wordIndex] != board[row][col]) {
        return false;
    }

    if (wordIndex == word.length - 1) {
        return true;
    }

    board[row][col] = "#";
    
    let res = solve(board, word, wordIndex + 1, row - 1, col) ||
        solve(board, word, wordIndex + 1, row, col- 1) ||
        solve(board, word, wordIndex + 1, row + 1, col) ||
        solve(board, word, wordIndex + 1, row, col + 1);

    board[row][col] = word[wordIndex];

    return res;
}

let board = [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], word = "ABCESEEEFS";
console.log(exist(board, word));