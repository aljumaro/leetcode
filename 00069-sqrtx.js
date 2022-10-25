/**
 * 
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
 * 
 * You must not use any built-in exponent function or operator.
 * 
 * For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 * 
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    return helper(0, x, x);
};

let helper = (low, high, target) => {
    let middle = Math.floor((high + low) / 2);
    if (middle * middle == target) {
        return middle;
    } else  {
        let plusOne = middle + 1;
        if (plusOne * plusOne > target && middle * middle < target) {
            return middle;
        }
        if (middle * middle < target) {
            return helper(middle + 1, high, target);
        } else {
            return helper(low, middle - 1, target);
        }
    }
}

let x = 16;
console.log(mySqrt(x));