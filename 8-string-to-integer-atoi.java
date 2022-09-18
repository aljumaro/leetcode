class Solution {
    public int myAtoi(String s) {
        int result = 0;
        int i = 0;
        boolean negative = false;
                
        while(i < s.length() && s.charAt(i) == ' ') {
            i++;
        }
        
        if (i < s.length() && s.charAt(i) == '+') {
            i++;
        } else if (i < s.length() && s.charAt(i) == '-'){
            i++;
            negative = true;
        }
        
        while (i < s.length() && Character.isDigit(s.charAt(i))) {
            int curr = s.charAt(i) - '0';
            
            if(result>(Integer.MAX_VALUE-curr)/10){
                System.out.println((Integer.MAX_VALUE-curr)/10);
                if(negative){
                    return Integer.MIN_VALUE;
                }else{
                    return Integer.MAX_VALUE;
                }
            }
            
            result = (result*10) + curr;
            i++;
        }
        
        return (negative) ? -1 * result : result;       
    }
}