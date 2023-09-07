
const leetCode435 = (intervals) => {
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0
    let prev = 0

    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i]
        if (current[0] < intervals[prev][1]) {
            count++
        } else { prev = i }
    }
    console.log(count)
    return count
}

leetCode435([[1,2],[2,3],[3,4],[1,3]])