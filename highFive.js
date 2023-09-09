/*

1086. High Five
Given a list of scores of different students, return the average score of each student's top five scores in the order of each student's id.

Each entry items[i] has items[i][0] the student's id, and items[i][1] the student's score.  The average score is calculated using integer division.

Example 1:

Input: [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
Output: [[1,87],[2,88]]
Explanation: 
The average of the student with id = 1 is 87.
The average of the student with id = 2 is 88.6. But with integer division their average converts to 88.

*/

const highFive = (items) => {

    let scoresMap = []

    for (let [id, score] of items) {
        if (!scoresMap[id]) {
            scoresMap[id] = [score]
        } else {
            scoresMap[id].push(score)
        }
    }

    let res = []

    Object.keys(scoresMap).map((key) => {
        let values = scoresMap[key]

        values = values.sort((a, b) => b - a)

        let topFive = 0

        for (let i = 0; i < 5; i++) {
            topFive += values[i]
        }
        let av = Math.floor(topFive / 5)

        res.push([key, av])
    })
    console.log(res)
    return res
}

highFive([[1, 91], [1, 92], [2, 93], [2, 97], [1, 60], [2, 77], [1, 65], [1, 87], [1, 100], [2, 100], [2, 76]])