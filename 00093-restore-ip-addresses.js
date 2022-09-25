/**
 * 
 * A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.
 * 
 * For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
 * Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.
 * 
 * Example 1:
 * 
 * Input: s = "25525511135"
 * Output: ["255.255.11.135","255.255.111.35"]
 * 
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = (s) => {
    const results = [];
    
    const go = (str, arr) => {
        // if we used every character and have 4 sections, it's a good IP!
        if (str.length === 0 && arr.length === 4) {
            results.push(arr.join('.'));
            return;
        }
        // we already have too many in the array, let's just stop
        if (arr.length >= 4) {
            return;
        }
        // chop off next 3 characters and continue recursing
        if (str.length > 2 && +str.substring(0, 3) < 256 && +str.substring(0, 3) > 0 && str[0] !== '0') {
            go(str.slice(3), [...arr, str.substring(0, 3)]);
        }
        // chop off next 2 characters and continue recursing
        if (str.length > 1 && +str.substring(0, 2) > 0 && str[0] !== '0') {
            go(str.slice(2), [...arr, str.substring(0, 2)]);
        }
        // chop off next 1 character and continue recursing, in this case, starting with 0 is OK
        if (str.length > 0 && +str.substring(0, 1) >= 0) {
            go(str.slice(1), [...arr, str.substring(0, 1)]);
        }
        return;
    }
    
    go(s, []);
    
    return results;
}

let s = "25525511135";
console.log(restoreIpAddresses(s));