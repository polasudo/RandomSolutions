/*A company is organizing a meeting and has a list of n employees, waiting to be invited. 
They have arranged for a large circular table, capable of seating any number of employees.
The employees are numbered from 0 to n - 1. 
Each employee has a favorite person and they will attend the meeting only if they can sit next to their favorite person at the table. 
The favorite person of an employee is not themself.
Given a 0-indexed integer array favorite, where favorite[i] denotes the favorite person of the ith employee, 
return the maximum number of employees that can be invited to the meeting. */

const maximumInvitations = function(favorite) {
    const n = favorite.length
    let indegree = new Array(n).fill(0), pairs = [], map = {}, out = 0
    
    for (let i = 0; i < n; i++) {
        // Create indegree array
        indegree[favorite[i]]++
        // Create pair array
        if (favorite[favorite[i]] == i && favorite[i] > i) pairs.push([i, favorite[i]])
        // Get reverse node map
        if (!(favorite[i] in map)) map[favorite[i]] = []
        map[favorite[i]].push(i)
    }

    // Start with loose node and leave all loop nodes
    let stack = []
    for (let i = 0; i < n; i++) {
        if (indegree[i] == 0) {
            stack.push(i)
        }
    }

    while (stack.length > 0) {
        let cur = stack.pop()
        indegree[favorite[cur]]--
        if (indegree[favorite[cur]] == 0) stack.push(favorite[cur])
    }

    // Go through loop nodes to get a max loop with node # > 2
    for (let i = 0; i < n; i++) {
        if (indegree[i] == 1) {
            let count = 1, start = i
            while (favorite[start] != i) {
                indegree[start]--
                start = favorite[start]
                count++
            }
            out = Math.max(out, count)
        }
    }

    // Scenario 2: pair favorites, can add up
    let pairMax = 0
    for (let pair of pairs) {
        const max = [1, 1]
        for (let i = 0; i < 2; i++) {
            let stack = [[pair[i], 1]]
            while (stack.length > 0) {
                let [cur, len] = stack.pop()
                if (!(cur in map)) {
                    max[i] = Math.max(max[i], len)
                    continue
                }
                for (let next of map[cur]) {
                    if (next == favorite[pair[i]]) continue
                    stack.push([next, len + 1])
                }
            }
        }

        pairMax += max[0] + max[1]
    }
    out = Math.max(out, pairMax)

    return out
};