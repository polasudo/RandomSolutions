// Function signature: def find_missing_number(nums) -> int

// Input:

// An array of distinct integers, where 1 <= len(nums) <= 1000 and 0 <= nums[i] <= len(nums).
// Output:

// An integer representing the missing number in the array.
// Example:
// nums = [3, 0, 1]
// result = find_missing_number(nums)
// print(result)  # Output: 2
// In this example, the function should return 2 since 2 is the missing number in the array [0, 1, 3].

nums = [3, 0, 1]

function find_missing_number(nums) {
    sorterArr = nums.sort((a,b)=> a-b) // [0, 1,2,3]     [0,1,2,3,4,]
    for (let i=0; i<nums.length; i++) {
        if(nums[i] !== i){
            return i
        }
    }
}

console.log(find_missing_number(nums))