/**
 * 
 * Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
 * A palindrome string is a string that reads the same backward as forward.
 * 
 * Example 1:
 * Input: s = "aab"
 * Output: [["a","a","b"],["aa","b"]]
 * 
 * @param {string} s
 * @return {string[][]}
 */
 var partition = (s) => {
    let result = [];
    
    solve(s, 0, [], result);
    
    return result;
};

var solve = (s, start, partitions, result) => {

    if (start >= s.length) {
        result.push([...partitions]);
        return;
    }

    for (let i = start; i < s.length; i++) {
        if (isPalindrome(s, start, i)) {
            partitions.push(s.substring(start, i+1));
            solve(s, i + 1, partitions, result);
            partitions.pop();
        }
    }
    
}

var isPalindrome = (s, i, j) => {
    if (s == "") {
        return false;
    }
    
    while (i < j) {
        if (s[i] != s[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
}

let s = "aab";
partition(s);