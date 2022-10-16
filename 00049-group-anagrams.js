/**
 * 
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let anagrams = {};
    for (let s of strs) {
        let freqs = new Array(26).fill(0);
        for (let c of s) {
            freqs[c.charCodeAt(0)-97]++;
        }
        let key = freqs.join('#');
        anagrams[key] ? anagrams[key].push(s) : anagrams[key] = [s];
    }

    return Object.values(anagrams);
};

let strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));