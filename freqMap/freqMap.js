function freqMap(nums) {
    let map = {}
    for (let num of nums) {
        map[num] = map[num] + 1 || 1
    }
    return map
}
console.log(freqMap([1, 2, 3, 2])) // { '1': 1, '2': 2, '3': 1 }

function freqMap1(nums) {
    let map = {}
    for (let num of nums) {
        if (!map[num]) {
            map[num] = 1
        } else map[num]++
        return map
    }
}
console.log(freqMap1([1, 2, 3, 2])) // { '1': 1, '2': 2, '3': 1 }