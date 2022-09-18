class Solution {
    public int reverse(int x) {
        boolean isNegative = false;
        
        if (x < 0) {
            isNegative = true;
            x *= -1;
        }
            
        int number = x;
        long reverse = 0;
        
        while (number > 0) {
            reverse = reverse * 10 + number % 10;
            number /= 10;
        }
        
        if (isNegative) {
            reverse *= -1;
        }
        
        if (reverse > Integer.MAX_VALUE | reverse < Integer.MIN_VALUE) {
            return 0;
        }
        
        return (int)reverse;
    }
}