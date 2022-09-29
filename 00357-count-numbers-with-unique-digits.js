/**
 * 
 * Given an integer n, return the count of all numbers with unique digits, x, where 0 <= x < 10n.
 * 
 * Example 1:
 * Input: n = 2
 * Output: 91
 * Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, excluding 11,22,33,44,55,66,77,88,99
 * 
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = (n) => {
    if (n == 0) {
        return 1;
    }

    if (n == 1) {
        return 10;
    }

    let result = 10;
    let product = 9;

    for (let i = 2; i <= n; i++) {
        product *= (11 - i);
        result += product;
    }

    return result;
};

console.log(countNumbersWithUniqueDigits(3));