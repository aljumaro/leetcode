/**
 * 
 * Problem description: Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
 * A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 * 
 * Example 1:
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
 * @param {string} digits
 * @return {string[]}
 */
    
var path = [];
var res = [];
const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
};

var letterCombinations = (digits) => {
    
    path = [];
    res = [];

    if (!digits) return [];

    dfs(digits);

    return res;
    
};

var dfs = (digits) => {

    if (path.length == digits.length) {
        res.push(path.join(''));
        return;
    }

    const nextNum = digits[path.length];

    for (let i of map[nextNum]) {
        path.push(i);

        dfs(digits);

        path.pop();
    }
}