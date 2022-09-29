/**
 * 
 * You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the matchsticks to make one square. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.
 * Return true if you can make this square and false otherwise.
 * 
 * Example 1:
 * Input: matchsticks = [1,1,2,2,2]
 * Output: true
 * Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
 * 
 * @param {number[]} matchsticks
 * @return {boolean}
 */
 var makesquare = (matchsticks) => {
    let n = matchsticks.length;
    
    if (n < 4) return false;

    let sum = matchsticks.reduce((acc, c) => acc + c, 0);

    if (sum % 4 != 0) return false;

    let side = sum / 4;

    let sides = [0, 0, 0, 0];

    matchsticks.sort((a, b) => b - a);

    let dfs = (i) => {
        if (i == n) {
            return sides[0] == side && sides[1] == side && sides[2] == side && sides[3] == side;
         }

        for (let j = 0; j < 4; j++) {
            if (sides[j] + matchsticks[i] > side) {
                continue;
            }

            sides[j] += matchsticks[i];

            if (dfs(i + 1)) {
                return true;
            }

            sides[j] -= matchsticks[i];
         }

         return false;
    }

    return dfs(0);
};

console.log(makesquare([4, 2, 2, 3, 1, 1, 1, 1, 1]));