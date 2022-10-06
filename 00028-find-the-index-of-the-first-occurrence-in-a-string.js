/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * 
 * Example 1:
 * Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 * The first occurrence is at index 0, so we return 0.
 * 
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length > haystack.length) {
        return -1;
    }

    for (let i = 0; i < haystack.length; i++) {
        let j = 0;
        while (j < needle.length && haystack[i+j] == needle[j]) {
            j++;
        }
        if (j == needle.length) {
            return i;
        }
    }

    return -1;
};

let haystack = "leetcode"; 
let needle = "leeto";
console.log(strStr(haystack, needle))
