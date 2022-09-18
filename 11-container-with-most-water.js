/**
 * 
 * Problem description: You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
 * 
 * Example: Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
 * 
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = (height) => {

    // Define an outermost left and right pointers
    let left = 0, right = height.length-1, max = 0;

    // While the pointers are not the same
    while (left < right) {
        // we save the biggest area the shortest `height` and the diff between left and right indexes as base
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));

        // We should keep the biggest `height` as it should render the bigger container
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};

let height = [1,2,1];
console.log(maxArea(height))

height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height))