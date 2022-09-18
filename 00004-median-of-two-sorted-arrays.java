class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int[] merged = new int[nums1.length + nums2.length];
        int i=0, j=0, k=0;
        
        while(i < nums1.length) {
            if (j >= nums2.length) {
                merged[k++] = nums1[i++];
                continue;
            }
            
            merged[k++] = (nums1[i] <= nums2[j]) ? nums1[i++] : nums2[j++];
        }
        
        while (j < nums2.length) {
            merged[k++] = nums2[j++];
        }
        
        if (k % 2 == 1){
            return (double) merged[k/2];
        }
        
        return (double) (merged[k/2] + merged[(k/2)-1])/2;
    }
}