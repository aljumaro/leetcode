/**
 * 
 * You are climbing a staircase. It takes n steps to reach the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let steps = new Array(46);
    steps[0] = 1;
    steps[1] = 1;
    steps[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        steps[i] = steps[i-1] + steps[i-2];
    }
    
    return steps[n];
};

let n = 3;
console.log(climbStairs(n));