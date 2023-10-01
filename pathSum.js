const pathSum = (root, sum) => {

    let res = []    // [[5, 4, 11, 2], [5, 8, 4, 5]]

    function dfs(root, currSum, curArr) {
        if(root === null) return []

        currSum += root.val //5,4,11,7 !== 22 // 5,4,11,2 === 22
        curArr.push(root.val)

        if(root.left === null && root.right === null && currSum === sum) {
            res.push([...curArr]) // [[5, 4, 11, 2]]
        }

        dfs(root.left, currSum, curArr)
        dfs(root.right, currSum, curArr)
        //backtrack
        curArr.pop()
    }
    dfs(root, 0, [])

    return res
}
console.log(pathSum([5,4,8,11,null,13,4,7,2,null,null,5,1], 22))