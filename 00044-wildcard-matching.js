/**
 * 
 * Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:
 * 
 * '?' Matches any single character.
 * '*' Matches any sequence of characters (including the empty sequence).
 * The matching should cover the entire input string (not partial).
 * 
 * Example 3:
 * 
 * Input: s = "cb", p = "?a"
 * Output: false
 * Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
 * 
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (s == p) {
        return true;
    }

    const matrix = new Array(p.length + 1);
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(s.length + 1).fill(false);
    }

    matrix[0][0] = true;
    for (let i = 0; i < p.length; i++) {
        if (p[i] == "*") {
            matrix[i+1][0] = matrix[i][0]
        }
    }

    for (let i = 0; i < p.length; i++) {
        for (let j = 0; j < s.length; j++) {
            let sChar = s[j];
            let pChar = p[i];

            if (pChar == "*") {
                matrix[i+1][j+1] = matrix[i][j] || matrix[i][j+1] || matrix[i+1][j];
            } else if (pChar == "?") {
                matrix[i+1][j+1] = matrix[i][j];
            } else {
                matrix[i+1][j+1] = matrix[i][j] && pChar == sChar;
            }
        }
    } 

    return matrix[p.length][s.length];
};

let s = "aa";
let p = "*";
console.log(isMatch(s, p));

/*

     |    |   a|   b|   c|   a|   d|   e|
     |   T|   F|   F|   F|   F|   F|   F|
    a|   F|   T|   F|   F|   F|   F|   F|
    *|   F|   T|   T|   T|   T|   T|   T|
    ?|   F|   F|   T|   T|   T|   T|   T|
    e|   F|   F|   F|   F|   F|   F|   T|
*/