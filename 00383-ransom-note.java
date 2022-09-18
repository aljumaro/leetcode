class Solution {    
    public boolean canConstruct(String ransomNote, String magazine) {
        int[] arr = new int[26];
        
        for (int i = 0; i < ransomNote.length(); i++) {
            char c = ransomNote.charAt(i);
            int v = arr[c - 'a'];
            arr[c - 'a'] = v + 1;
        }
        
        for (int i = 0; i < magazine.length(); i++) {
            char c = magazine.charAt(i);
            int v = arr[c - 'a'];
            arr[c - 'a'] = v - 1;
        }
        
        for (int i: arr) {
            if (i > 0) {
                return false;
            }
        }
        
        return true;
    }
}