/**
 * 
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * 
 * Input: board = 
 * 
 * [["5","3",".",".","7",".",".",".","."]
 * ,["6",".",".","1","9","5",".",".","."]
 * ,[".","9","8",".",".",".",".","6","."]
 * ,["8",".",".",".","6",".",".",".","3"]
 * ,["4",".",".","8",".","3",".",".","1"]
 * ,["7",".",".",".","2",".",".",".","6"]
 * ,[".","6",".",".",".",".","2","8","."]
 * ,[".",".",".","4","1","9",".",".","5"]
 * ,[".",".",".",".","8",".",".","7","9"]]
 * 
 * Output: true
 * 
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for(let i = 0; i < board.length; i++) {
    let row = new Set();
    let col = new Set();
    let mini = new Set();

    for (let j = 0; j < board[0].length; j++) {
        let r = board[i][j];
        let c = board[j][i];
        let m = board[3*Math.floor(i/3) + Math.floor(j/3)][3*(i%3) + (j%3)];

        //console.log(`${i},${j} - ${j},${i} - ${3*Math.floor(i/3) + Math.floor(j/3)},${3*(i%3) + (j%3)}`)

        if (r != ".") {
            if (row.has(r)) {
                return false;
            }

            row.add(r);
        }

        if (c != ".") {
            if (col.has(c)) {
                return false;
            } 

            col.add(c);
        }

        if (m != ".") {
            if (mini.has(m)) {
                return false;
            } 
            
            mini.add(m);
        }
    }
  }  
  
  return true;
};

let board = 
[[".",".",".",".","5",".",".","1","."]
,[".","4",".","3",".",".",".",".","."]
,[".",".",".",".",".","3",".",".","1"]
,["8",".",".",".",".",".",".","2","."]
,[".",".","2",".","7",".",".",".","."]
,[".","1","5",".",".",".",".",".","."]
,[".",".",".",".",".","2",".",".","."]
,[".","2",".","9",".",".",".",".","."]
,[".",".","4",".",".",".",".",".","."]];

console.log(isValidSudoku(board));