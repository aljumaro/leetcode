/**
 * 
 * An additive number is a string whose digits can form an additive sequence.
 * A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.
 * 
 * Given a string containing only digits, return true if it is an additive number or false otherwise.
 * 
 * Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.
 * 
 * Example 1:
 * Input: "112358"
 * Output: true
 * Explanation: 
 * The digits can form an additive sequence: 1, 1, 2, 3, 5, 8. 
 * 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
 * 
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = (num) => {
    if (num.length <= 2) {
        return false;
    }

    for (let i = 1; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            let num1 = num.slice(0, i);
            let num2 = num.slice(i, j);
            let rest = num.slice(j);

            if (num1.length > 1 && num1[0] === "0") return false;
            if (num2.length > 1 && num2[0] === "0") break;
            if (rest.length < num1.length || rest.length < num2.length) break;

            if (solve(num1, num2, rest)) return true;
            
        }       
    }

    return false;
};

var solve = (num1, num2, rest) => {
    if (!rest.length) return true;
    let sum = (+num1 + +num2).toString();
    if (!rest.startsWith(sum)) return false;
    return solve(num2, sum, rest.slice(sum.length));
}

let num = "199001200";
console.log(isAdditiveNumber(num));