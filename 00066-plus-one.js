/**
 * 
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. 
 * The large integer does not contain any leading 0's.
 * 
 * Increment the large integer by one and return the resulting array of digits.
 * 
 * Example 1:
 * 
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * Incrementing by one gives 123 + 1 = 124.
 * Thus, the result should be [1,2,4].
 * 
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const ten = BigInt(10);
    let n = BigInt(digits[0]);
    
    for (let i = 1; i < digits.length; i++) {
        n = n*ten + BigInt(digits[i]);
    }

    n++;

    let res = [];
    while (n > 0) {
        let m = n % ten;
        res.unshift(Number(m));
        n = n/ten;
    }

    return res;
};

let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
console.log(plusOne(digits));