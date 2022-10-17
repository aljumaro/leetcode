/**
 * 
 * Implement pow(x, n), which calculates x raised to the power n (i.e., x^^n).
 * 
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let res = pow(x, Math.abs(n));

    return n < 0 ? 1 / res : res;
};

var pow = (x, n) => {
    if (x == 0) return 0;
    if (n == 0) return 1;

    let res = myPow(x * x, Math.floor(n/2));
    return (n % 2) ? x * res : res;
}

let x = 2;
let n = 9;
console.log(myPow(x, n));