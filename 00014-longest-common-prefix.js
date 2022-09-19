/**
 * 
 * Problem description: Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = (strs) => {
    let numberOfWords = strs.length, res = "";

    if (numberOfWords == 0) {
        return "";
    }

    if (numberOfWords == 1) {
        return strs[0];
    }

    let i = 0;
    res = strs[i]
    i++;
    while (i < strs.length) {
        let word = strs[i];
        let j = 0;
        if (word.length < res.length) {
            res = res.substring(0, word.length);
        }
        while (j < word.length) {
            if (res[j] != word[j]) {
                res = res.substring(0, j);
                break;
            }
            j++;
        }
        i++;
    }

    return res;
};

let strs = ["ab","a"];
console.log(longestCommonPrefix(strs));