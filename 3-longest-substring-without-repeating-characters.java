class Solution {
    public int lengthOfLongestSubstring(String s) {
        Set<Character> seen = new HashSet<>();
        int i = 0, j = 0, max = 0;
        
        while (j < s.length()) {
            if (!seen.add(s.charAt(j))) {
                seen.remove(s.charAt(i++));
            } else{
                max = Math.max(j-i+1, max);
                j++;
            }
        }
        
        return max;
    }
}