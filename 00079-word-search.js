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
                result = solve(board, word, 1, i, j);
                if (result) {
                    return true;
                }
            }
        }
    }
    return result;
};

var solve = (board, word, wordIndex, i, j, used = {}) => {
    if (wordIndex == word.length) {
        return true;
    }
    let key = `${i},${j}`;
    used[key] = true;
    let adjacent = adjacents(board, i, j);
    for (a of adjacent) {
        let l = a[0], k = a[1];
        if (board[l][k] == word[wordIndex] && !(`${l},${k}` in used)) {
            let res = solve(board, word, wordIndex + 1, l, k, used);
            if (res) {
                return res;
            }
        }
    }
    delete used[key];
    return false;
}

var adjacents = (board, i, j) => {
    let result = [];
    if (i != 0) {
        result.push([i-1, j]);
    }
    if (j != 0) {
        result.push([i, j-1]);
    }
    if (i != board.length-1) {
        result.push([i+1, j]);
    }
    if (j != board[0].length-1) {
        result.push([i, j+1]);
    }
    return result;
}


let board = [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], word = "ABCESEEEFS";
console.log(exist(board, word));