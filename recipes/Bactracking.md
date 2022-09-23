# Recipe for backtracking algorithms

* Define recursion termination condition(s)
* Define next candidates
    * These might be some elemens on an array, an adjacent cell on a grid or maybe a character on a word.
* Define conditions to add and delete possible results
    * Add and later delete an element in an array, modify a cell on a grid, etc...

### Example 

[Permutations](../00046-permutations.js)

```javascript
var permute = (nums) => {
    let result = [];
    
    solve(nums, 0, result);

    return result;
};

var solve = (nums, index, result) => {
    // Recursion termination condition
    if (index == nums.length) {
        result.push([...nums]);
        return;
    }

    // Candidates: all the elemens in the initial array.
    for (let n = index; n < nums.length; n++) {
        // Add possible result
        swap(nums, n, index);
        // Recursion call
        solve(nums, index + 1, result);
        //Revert possible result
        swap(nums, n, index);
    }
}

var swap = (nums, i, j) => {
    if (i != j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
}
```