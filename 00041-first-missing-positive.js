/**
 * 
 * Given an unsorted integer array nums, return the smallest missing positive integer.
 * You must implement an algorithm that runs in O(n) time and uses constant extra space.
 * 
 * Example 1:
 * Input: nums = [1,2,0]
 * Output: 3
 * Explanation: The numbers in the range [1,2] are all in the array.
 * 
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
    let n=nums.length;
    let index;
    let element;
    let temp;
    
    for(let i=0;i<n;i++){
        if(nums[i]>=1 && nums[i]<=n){
            element=nums[i];
            index=element-1;
            
            if(nums[index]!=element){
                   temp=nums[index];
                   nums[index]=element;
                   nums[i]=temp;
                   i--;
            }
        }
    }

    for(let i=0;i<n;i++){
        if(nums[i]!=i+1){
            return i+1;
        }
    }

    return n+1;
};

let nums = [3,4,-1,1];
console.log(firstMissingPositive(nums));