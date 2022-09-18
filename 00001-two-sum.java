class Solution {
    public int[] twoSum(int[] nums, int target) {        
        Map<Integer, Integer> elements = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int remaining = target - nums[i];
            if (elements.containsKey(remaining)) {
                return new int[]{elements.get(remaining), i};
            }
            elements.put(nums[i], i);
        }
        
        return null;
    }
}