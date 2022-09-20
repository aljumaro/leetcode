/**
 * 
 * Problem description: Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * 
 * Example 1:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * 
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []; 
    solve(n, 0, 0, res, "");
    return res;
};

var solve = (n, openBrackets, closedBrackets, res, currString) => {
    if (currString.length == n * 2) {
        res.push(currString);
        return;
    }

    if (openBrackets < n) {
        solve(n, openBrackets + 1, closedBrackets, res, currString + "(");
    }
    
    if (closedBrackets < openBrackets) {
        solve(n, openBrackets, closedBrackets + 1, res, currString + ")");
    }
}

let n = 3;
console.log(generateParenthesis(n));