/*Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]] */

const fourSum = (nums, target) => {
    nums.sort((a, b) => a - b);

    let res = []

    if (nums < 4) return []

    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let k = j + 1
            let l = nums.length - 1

            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l]

                if (sum === target) {
                    res.push([nums[i], nums[j], nums[k], nums[l]])
                    while (nums[k] === nums[k + 1]) k++
                    while (nums[l] === nums[l - 1]) l--
                    k++
                    l--
                } else if (sum < target) {
                    k++
                } else {
                    l--
                }
            }
            while (nums[j] === nums[j + 1]) j++
        }
        while (nums[i] === nums[i + 1]) i++
    }
    console.log(res)
    return res;
}

let nums = [1, 0, -1, 0, -2, 2]
let target = 0
fourSum(nums, target)