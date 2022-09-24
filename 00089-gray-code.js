/**
 * 
 * An n-bit gray code sequence is a sequence of 2n integers where:
 * Every integer is in the inclusive range [0, 2n - 1],
 *  The first integer is 0,
 *  An integer appears no more than once in the sequence, 
 *  The binary representation of every pair of adjacent integers differs by exactly one bit, and
 *  The binary representation of the first and last integers differs by exactly one bit.
 * 
 * Given an integer n, return any valid n-bit gray code sequence.
 * 
 * Example 1:
 * Input: n = 2
 * Output: [0,1,3,2]
 * Explanation:
 * The binary representation of [0,1,3,2] is [00,01,11,10].
 * - 00 and 01 differ by one bit
 * - 01 and 11 differ by one bit
 * - 11 and 10 differ by one bit
 * - 10 and 00 differ by one bit
 * [0,2,3,1] is also a valid gray code sequence, whose binary representation is [00,10,11,01].
 * - 00 and 10 differ by one bit
 * - 10 and 11 differ by one bit
 * - 11 and 01 differ by one bit
 * - 01 and 00 differ by one bit
 * 
 * @param {number} n
 * @return {number[]}
 */
 var grayCode = (n) => {

    let length = 2 ** n;

    let result = [0];

    let used = new Set();
    used.add(result[0]);

    solve(result, 0, length, used);
    
    return result;
};

var solve = (result, index, length, used) => {
    if (result.length == length) {
        return oneBitDiff(result[0], result[length-1]);
    }

    for (let l = 0; l < length; l++) {
        let next = toggleBit(result[index], l);
        if (used.has(next)) {
            continue;
        }

        result.push(next);
        used.add(next);
        let res = solve(result, index + 1, length, used);
        if (res) {
            return res;
        }
        result.pop();
        used.delete(next);
    }
}

const oneBitDiff = (a, b) => {
    const bitStr = ((a ^ b)).toString(2);
    return bitStr.split('1').length - 1 == 1;
};

const toggleBit = (n, p) => {
    return n ^= 1 << p;
}

// Not my solution O_o
var grayCode2 = function(n) {
    const rs = [0];
    
    for(let i=0;i<n;i++){
        const size = rs.length;
        for(let k=size-1;k>=0;k--)
            rs.push(rs[k] | 1<<i);
        // console.log(rs);
    }
    return rs;
};

let n = 2;
console.log(grayCode2(n));